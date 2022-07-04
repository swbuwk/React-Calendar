import moment from "moment";
import { useState } from "react";
import { getWeek } from "../helpers/moment";

const useWeekState = (momentInitial) => {
    const [currentWeek, setCurrentWeek] = useState(getWeek(momentInitial));
    const [selectedMoment, setSelectedMoment] = useState(momentInitial);

    const setPrevWeek = () => {
        setCurrentWeek(getWeek(currentWeek[6].subtract(1, "week")))
        setSelectedMoment(selectedMoment.subtract(1, "week"))
      }
    
    const setNextWeek = () => {
        setCurrentWeek(getWeek(currentWeek[6].add(1, "week")))
        setSelectedMoment(selectedMoment.add(1, "week"))
    }

    const setToday = () => {
        setCurrentWeek(getWeek(moment()))
        setSelectedMoment(moment())
    }

    return {currentWeek, setCurrentWeek, selectedMoment, setSelectedMoment, setToday, setPrevWeek, setNextWeek}
}

export default useWeekState