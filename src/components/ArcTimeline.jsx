"use client";
import { cn } from "@/lib/utils";
import {
  useState,
  useEffect,
  useCallback,
} from "react";


export function ArcTimeline(props) {
  const {
    className,
    children,
    data,
    arcConfig = {},
    defaultActiveStep = {},
    ...restProps
  } = props;

  const {
    circleWidth = 5000,
    angleBetweenMinorSteps = 0.35,
    lineCountFillBetweenSteps = 10,
    boundaryPlaceholderLinesCount = 50,
  } = arcConfig;

  const {
    time: defaultActiveTime = data[0].time,
    stepIndex: defaultActiveStepIndex = 0,
  } = defaultActiveStep || {};

  const [isMobile, setIsMobile] = useState(false);
  const [touchStartX, setTouchStartX] = useState(null);
  const [touchEndX, setTouchEndX] = useState(null);

  const [currentStepIndex, setCurrentStepIndex] = useState(() => {
    let count = 0;
    for (const timelineItem of data) {
      if (timelineItem.time === defaultActiveTime) {
        count += defaultActiveStepIndex;
        break;
      } else {
        count += timelineItem.steps.length;
      }
    }
    return count;
  });

  const totalSteps = data.reduce((total, item) => total + item.steps.length, 0);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const [circleContainerRotateDeg, setCircleContainerRotateDeg] = useState(
    () => {
      let count = 0;
      for (const timelineItem of data) {
        if (timelineItem.time === defaultActiveTime) {
          count += defaultActiveStepIndex;
          break;
        } else {
          count += timelineItem.steps.length;
        }
      }
      return (
        -1 * count * angleBetweenMinorSteps * (lineCountFillBetweenSteps + 1) -
        angleBetweenMinorSteps * boundaryPlaceholderLinesCount
      );
    }
  );
  const handleTouchStart = (e) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEndX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;

    const distance = touchStartX - touchEndX;

    // Swipe sensitivity
    const minSwipeDistance = 50;

    // Swipe LEFT → Next step
    if (distance > minSwipeDistance) {
      navigateToStep(currentStepIndex + 1);
    }

    // Swipe RIGHT → Previous step
    if (distance < -minSwipeDistance) {
      navigateToStep(currentStepIndex - 1);
    }

    setTouchStartX(null);
    setTouchEndX(null);
  };

  const navigateToStep = useCallback(
    (stepIndex) => {
      if (stepIndex < 0 || stepIndex >= totalSteps) return;

      setCurrentStepIndex(stepIndex);
      const newRotation =
        -1 *
          stepIndex *
          angleBetweenMinorSteps *
          (lineCountFillBetweenSteps + 1) -
        angleBetweenMinorSteps * boundaryPlaceholderLinesCount;
      setCircleContainerRotateDeg(newRotation);
    },
    [
      totalSteps,
      angleBetweenMinorSteps,
      lineCountFillBetweenSteps,
      boundaryPlaceholderLinesCount,
    ]
  );

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        navigateToStep(currentStepIndex - 1);
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        navigateToStep(currentStepIndex + 1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentStepIndex, navigateToStep]);

  return (
    <div
      {...restProps}
      className={cn(
        "relative w-full overflow-hidden focus:outline-none",
        "h-[380px] sm:h-[420px] lg:h-[480px]",
        className
      )}
      tabIndex={0}
      role="region"
      aria-label="Interactive timeline - use left and right arrow keys to navigate"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="absolute top-2 left-1/2 transform -translate-x-1/2 text-xs text-gray-500 dark:text-gray-400 z-10">
        Use ← → arrow keys to navigate
      </div>

      <div
        style={{
          transform: `translateX(-50%) rotate(${circleContainerRotateDeg}deg)`,
          width: `${circleWidth}px`,
        }}
        className={cn(
          "absolute left-1/2 aspect-square origin-center rounded-full transition-all duration-500 ease-in-out",
          "top-20 sm:top-24 lg:top-28"
        )}
      >
        {data.map((line, lineIndex) => {
          return (
            <div key={`${lineIndex}`}>
              {line.steps.map((step, stepIndex) => {
                // calc the angle of the step
                const angle =
                  angleBetweenMinorSteps *
                    (lineCountFillBetweenSteps + 1) *
                    (data
                      .slice(0, lineIndex)
                      .map((item) => item.steps.length)
                      .reduce((prev, current) => prev + current, 0) +
                      stepIndex) +
                  angleBetweenMinorSteps * boundaryPlaceholderLinesCount;
                const isLastStep =
                  lineIndex === data.length - 1 &&
                  stepIndex === line.steps.length - 1;
                const isFirstStep = lineIndex === 0 && stepIndex === 0;

                const globalStepIndex =
                  data
                    .slice(0, lineIndex)
                    .map((item) => item.steps.length)
                    .reduce((prev, current) => prev + current, 0) + stepIndex;
                const isActive = globalStepIndex === currentStepIndex;

                return (
                  <div key={`${lineIndex}-${stepIndex}`}>
                    {/* placeholder lines before the first step */}
                    {isFirstStep && (
                      <PlaceholderLines
                        isFirstStep={true}
                        isLastStep={false}
                        angle={angle}
                        angleBetweenMinorSteps={angleBetweenMinorSteps}
                        lineCountFillBetweenSteps={lineCountFillBetweenSteps}
                        boundaryPlaceholderLinesCount={
                          boundaryPlaceholderLinesCount
                        }
                        lineIndex={lineIndex}
                        stepIndex={stepIndex}
                        circleWidth={circleWidth}
                        circleContainerRotateDeg={circleContainerRotateDeg}
                      />
                    )}
                    <div
                      className={cn(
                        "absolute left-1/2 top-0 -translate-x-1/2 transition-all duration-200",
                        isActive
                          ? "h-[100px] sm:h-[120px] lg:h-[140px] w-[2px] sm:w-[2.5px]"
                          : "h-12 sm:h-16 lg:h-20 w-[1.5px] sm:w-[2px]"
                      )}
                      style={{
                        transformOrigin: `50% ${circleWidth / 2}px`,
                        transform: `rotate(${angle}deg)`,
                      }}
                      onMouseEnter={() => {
                        navigateToStep(globalStepIndex);
                      }}
                    >
                      <div
                        className={cn(
                          "h-full w-full transition-colors duration-200",
                          isActive
                            ? "bg-[var(--step-line-active-color,#888888)] dark:bg-[var(--step-line-active-color,#9780ff)]"
                            : "bg-[var(--step-line-inactive-color,#b1b1b1)] dark:bg-[var(--step-line-inactive-color,#737373)]"
                        )}
                        style={{
                          transformOrigin: "center top",
                          transform: `rotate(${-1 * angle - circleContainerRotateDeg}deg)`,
                        }}
                      >
                        <div
                          className={cn(
                            "absolute bottom-0 left-1/2 aspect-square -translate-x-1/2 transition-all duration-300",
                            isActive
                              ? "translate-y-[calc(100%_+_12px)] sm:translate-y-[calc(100%_+_14px)] lg:translate-y-[calc(100%_+_16px)] scale-[1.1] sm:scale-[1.2] text-blue-600 "
                              : "translate-y-[calc(100%_+_3px)] sm:translate-y-[calc(100%_+_4px)] lg:translate-y-[calc(100%_+_5px)] scale-90 sm:scale-100 text-gray-200"
                          )}
                        >
                          {step.icon}
                        </div>
                        <div
                          className={cn(
                            "absolute bottom-0 left-1/2 flex -translate-x-1/2 items-center justify-center text-center transition-all duration-300 ease-in",
                            "w-[200px] sm:w-[280px] lg:w-[320px]",
                            "translate-y-[calc(100%_+_35px)] sm:translate-y-[calc(100%_+_42px)] lg:translate-y-[calc(100%_+_48px)]",
                            "text-white dark:text-[var(--description-color,#d4d4d4)]",
                            isActive ? "opacity-100" : "opacity-0"
                          )}
                        >
                          {step.content}
                        </div>
                      </div>
                      {stepIndex === 0 && (
                        <div
                          className={cn(
                            "absolute left-1/2 top-0 z-10 -translate-x-1/2 whitespace-nowrap transition-all duration-300",
                            "translate-y-[calc(-100%-16px)] sm:translate-y-[calc(-100%-20px)] lg:translate-y-[calc(-100%-24px)]",
                            "text-sm sm:text-base font-medium",
                            isActive
                              ? "text-blue-500 dark:text-[var(--time-active-color,#d4d4d4)] scale-110"
                              : "text-[var(--time-inactive-color,#a3a3a3)] dark:text-[var(--time-inactive-color,#a3a3a3)] scale-100"
                          )}
                        >
                          {line.time}
                        </div>
                      )}
                    </div>

                    {/* fill lines between steps, in the last step, fill the placeholder lines */}
                    <PlaceholderLines
                      isFirstStep={false}
                      isLastStep={isLastStep}
                      angle={angle}
                      angleBetweenMinorSteps={angleBetweenMinorSteps}
                      lineCountFillBetweenSteps={lineCountFillBetweenSteps}
                      boundaryPlaceholderLinesCount={
                        boundaryPlaceholderLinesCount
                      }
                      lineIndex={lineIndex}
                      stepIndex={stepIndex}
                      circleWidth={circleWidth}
                      circleContainerRotateDeg={circleContainerRotateDeg}
                    />
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}


function PlaceholderLines(props) {
  const {
    isFirstStep,
    isLastStep,
    angle,
    angleBetweenMinorSteps,
    lineCountFillBetweenSteps,
    boundaryPlaceholderLinesCount,
    lineIndex,
    stepIndex,
    circleWidth,
    circleContainerRotateDeg,
  } = props;

  const getAngle = (index) => {
    if (isFirstStep) {
      return index * angleBetweenMinorSteps;
    } else {
      return angle + (index + 1) * angleBetweenMinorSteps;
    }
  };

  return (
    <>
      {Array(
        isLastStep || isFirstStep
          ? boundaryPlaceholderLinesCount
          : lineCountFillBetweenSteps
      )
        .fill("")
        .map((_, fillIndex) => {
          const fillAngle = getAngle(fillIndex);
          return (
            <div
              key={`${lineIndex}-${stepIndex}-${fillIndex}`}
              className={cn(
                "absolute left-1/2 top-0 -translate-x-1/2",
                "h-[28px] sm:h-[34px] lg:h-[40px] w-[1px] cursor"
              )}
              style={{
                transformOrigin: `50% ${circleWidth / 2}px`,
                transform: `rotate(${fillAngle}deg)`,
              }}
            >
              <div
                className="h-full w-full bg-[var(--placeholder-line-color,#a1a1a1)]"
                style={{
                  transformOrigin: "center top",
                  transform: `rotate(${-1 * fillAngle - circleContainerRotateDeg}deg)`,
                }}
              ></div>
            </div>
          );
        })}
    </>
  );
}
