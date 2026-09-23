const dateKey = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

const dayNumber = (key) => {
  const [year, month, day] = key.split('-').map(Number);
  return Date.UTC(year, month - 1, day) / 86_400_000;
};

export function getTripPhase(now, trip) {
  const today = dateKey(now);
  if (today < trip.startDate) {
    return { phase: 'before', daysUntil: dayNumber(trip.startDate) - dayNumber(today) };
  }
  if (today > trip.endDate) {
    return { phase: 'after', daysUntil: dayNumber(trip.endDate) - dayNumber(today) };
  }
  return { phase: 'during', daysUntil: 0 };
}

export function getActiveDay(now, days) {
  if (!days.length) return null;
  const today = dateKey(now);
  return days.find((day) => day.date === today)
    ?? (today < days[0].date ? days[0] : days.at(-1));
}

export function getPageReminder(now, trip, days, incompleteCount) {
  const { phase, daysUntil } = getTripPhase(now, trip);

  if (phase === 'before') {
    const checklist = incompleteCount > 0 ? `，还有 ${incompleteCount} 项行前清单未完成` : '';
    return { tone: 'info', title: '行前准备', text: `距出发还有 ${daysUntil} 天${checklist}。` };
  }

  if (phase === 'after') {
    return { tone: 'success', title: '旅程结束', text: '旅程已结束，记得整理照片和保存重要票据。' };
  }

  const activeDay = getActiveDay(now, days);
  if (activeDay?.id === 'day-4') {
    return { tone: 'warning', title: '先看山顶天气', text: '出发前查看少女峰天气、实时摄像头及设施开放情况。' };
  }
  if (activeDay?.id === 'day-5') {
    return { tone: 'warning', title: '换乘优先', text: '日内瓦换乘时间有限，不适合离站；先确认站台和车票。' };
  }
  if (activeDay?.id === 'day-8') {
    return { tone: 'warning', title: '提前前往机场', text: '国际航班请至少提前 3 小时抵达机场，并为 RER 预留缓冲。' };
  }

  return { tone: 'info', title: `今日：${activeDay?.title ?? trip.title}`, text: '按当天行程留意交通时间，并关注现场通知。' };
}
