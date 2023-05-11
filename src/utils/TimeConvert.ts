export const convertToHour = (min: number): string => {
  const hour = Math.floor(min / 60);
  const minute = min % 60;
  if (hour === 0) {
    return `${minute}분`;
  } else if (minute === 0) {
    return `${hour}시간`;
  } else {
    return `${hour}시간 ${minute}분`;
  }
};

export const convertToMinute = (time: string): string => {
  const hourIndex = time.indexOf("시간");
  const minuteIndex = time.indexOf("분");

  if (hourIndex > -1) {
    const hour = Number(time.substring(0, hourIndex));
    const minute =
      minuteIndex > -1 ? Number(time.substring(hourIndex + 3, minuteIndex)) : 0;
    return hour * 60 + minute + "분";
  } else if (minuteIndex > -1) {
    const minute = Number(time.substring(0, minuteIndex));
    return minute + "분";
  } else {
    return 0 + "분";
  }
};
