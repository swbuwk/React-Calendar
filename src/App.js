import './App.css';
import { useEffect, useState } from 'react';
import { Header } from './components/styled/Header';
import { Day, Main, Table, TableBlock, TableDay, Timestamps, TodoTable, WeekChanger, WeekDays, WeekSection } from './components/styled/Main';
import { Footer } from './components/styled/Footer';
import Button from './components/UI/Button';
import moment from "moment"
import { getSplitDay } from './helpers/moment';
import useWeekState from './hooks/useWeekState';
import Form from './components/UI/Form';

function App() {
  const [events, setEvents] = useState([]);
  const [isFormVisible, setIsFormVisible] = useState(false)
  const [formDate, setFormDate] = useState()
  const [formTime, setFormTime] = useState()

  const addEvent = () => {
    const newEvent = moment(`${formDate} ${formTime}`, "YYYY-MM-DD HH:mm")
    setEvents([...events, newEvent])
  }
  
  const {currentWeek,
    selectedMoment,
    setSelectedMoment,
    setToday,
    setPrevWeek,
    setNextWeek} = useWeekState(moment());
        
  const findEvents = (hour) => {
    return events.find(el => el.diff(hour, "minute") < 60 && el.diff(hour, "minute") >= 0)
  }

  const deleteEvents = (hour) => {
    setEvents(events.filter(el => !(el.diff(hour, "minute") < 60 && el.diff(hour, "minute") >= 0)))
  }

  useEffect(() => {
    setToday()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="App">
      <Header>
        Календарь
        <Button onClick={() => setIsFormVisible(true)} free color="red" size="50px">+</Button>
      </Header>
      <Main>
        <WeekSection>
          <WeekDays>
              {currentWeek.map(day =>
                <Day
                  key={day.format("dddd")}
                  selected={selectedMoment.format("dddd")===day.format("dddd")}
                  onClick={() => setSelectedMoment(day.hour(selectedMoment.format("HH")))}>
                  <div>{day.format("ddd")}</div>
                  <div>{day.format("D")}</div>
                </Day>
              )}
          </WeekDays>
          <WeekChanger>
            <Button onClick={() => setPrevWeek()} free color="red">{"<"}</Button>
            <div>{selectedMoment.format("DD MMMM YYYY")}</div>
            <Button onClick={() => setNextWeek()} free color="red">{">"}</Button>
          </WeekChanger>
        </WeekSection>
        
        <TodoTable>
          <Timestamps>
            {Array.from(Array(24).keys()).map(el =>
              <div key={el}>{el}:00</div>)}
          </Timestamps>
          <Table>
            {currentWeek.map(day => 
              <TableDay
                key={day.unix()}
                selected={selectedMoment.format("dddd")===day.format("dddd")}>
                {getSplitDay(day).map(hour =>
                  <TableBlock
                  selected={selectedMoment.format("HH dddd")===hour.format("HH dddd")}
                  onClick={() => setSelectedMoment(hour)}
                  key={hour.unix()}
                  hasTodo={findEvents(hour)}><div/></TableBlock>
                )}
              </TableDay>
            )}
          </Table>
        </TodoTable>
      </Main>
      <Footer>
        <Button free color="red" onClick={setToday}>Сегодня</Button>
        <Button free disabled={!findEvents(selectedMoment)} color="red" onClick={() => deleteEvents(selectedMoment)}>Удалить</Button>
      </Footer>
      <Form
        isFormVisible={isFormVisible} 
        setIsFormVisible={setIsFormVisible}
        onOK={addEvent}
        title="Добавить событие">
          <input type={"date"} onChange={e => setFormDate(e.target.value)}></input>
          <input type={"time"} onChange={e => setFormTime(e.target.value)}></input>
      </Form>
    </div>
  );
}

export default App;
