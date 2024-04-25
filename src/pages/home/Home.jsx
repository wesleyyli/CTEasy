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
          <Widget type="user" />
          <Widget type="company" />
          {/* <Widget type="order" /> */}
          <Widget type="earning" />
        </div>
        {/* <div className="charts">
          <Featured />
          <Chart title="Last 6 Months (Revenue)" aspect={2 / 1} />
        </div> */}
        <div className="calendar">
          <Calendar />
        </div>
        <div className="listContainer">
          <div className="listTitle">Favorite Contacts</div>
          <Table />
        </div>
        <div className="chatBot">
          <ThemeProvider theme={theme}>
            <ChatBot
              steps={[
                {
                  id: 'hello-world',
                  message: 'Hello World!',
                  end: true,
                },
                
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
