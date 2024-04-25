import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./home.scss";
import Widget from "../../components/widget/Widget";
import Featured from "../../components/featured/Featured";
import Chart from "../../components/chart/Chart";
import Table from "../../components/table/Table2";
import Calendar from "../../components/calendar/Calendar";
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

const Home = () => {
  const theme = {
    background: '#f5f8fb',
    fontFamily: 'Helvetica Neue',
    headerBgColor: '#193c67',
    headerFontColor: '#fff',
    headerFontSize: '15px',
    botBubbleColor: '#193c67',
    botFontColor: '#fff',
    userBubbleColor: '#fff',
    userFontColor: '#4a4a4a',
  };

  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" /> {/*User Widget*/}
          <Widget type="company" /> {/*Contacts Widget*/}
          <Widget type="earning" /> {/*Donations Widget*/}
        </div>
        <div className="calendar"> {/*Calender Widget*/}
          <Calendar />
        </div>
        <div className="listContainer"> {/*Favorite Contacts Widget*/}
          <div className="listTitle">Favorite Contacts</div>
          <Table />
        </div>
        <div className="chatBot"> {/*Chatbot*/}
          <ThemeProvider theme={theme}>
            <ChatBot
              steps={[
                {
                  id: '0',
                  message: 'Welcome to CTEasy! Do you have any questions?',
           
                  // This calls the next id
                  // i.e. id 1 in this case
                  trigger: '2',
              }, {
                  id: '2',
           
                  // Here we want the user
                  // to enter input
                  user: true,
                  trigger: '3',
              }, {
                  id: '3',
                  message: "The dark mode toggle can be found on the sidebar on the right and the moon icon on the top right!",
                  trigger: '4'
              }, {
                  id: '4',
                  user: true,
                  trigger: '5',
              }, {
                id: '5',
                message: "Sorry, the connection is not strong enough right now...",
                end: true,
            }
                
              ]}
              floating={true}
            />
          </ThemeProvider>
        </div>
      </div>
    </div>
  );
};

export default Home;
