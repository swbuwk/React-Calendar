export const getWeek = (moment) => {
    let week = []
    for (let i=1; i<=7; i++) {
      week.push(moment.clone().isoWeekday(i))
    }
    return week
  }

export const getSplitDay = (moment) => {
    let day = []
    for (let i=0; i<=23; i++) {
        day.push(moment.clone().startOf("day").add(i, "hour"))
    }
    return day
}