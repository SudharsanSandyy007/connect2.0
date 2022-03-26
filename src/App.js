import { AddCircle } from "@mui/icons-material";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Chat from "./Chat";
import ChatSideBar from "./ChatSideBar";
import ChatWindow from "./ChatWindow";
import FeedBox from "./FeedBox";
import GroupChatsSideBar from "./GroupChatsSideBar";
import GroupChatWindow from "./GroupChatWindow";
import Login from "./Login";
import NavBar from "./NavBar";
import RightSideBar from "./RightSideBar";
import SideBar from "./SideBar";
import { useStateValue } from "./StateProvider";
import StoreShowCase from "./StoreShowCase";

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="app">
      {user ? (
        <>
          <NavBar />
          <Routes>
            <Route
              path="/"
              element={
                <div className="app__body">
                  <SideBar />
                  <FeedBox />
                  <RightSideBar />
                </div>
              }
            />
            <Route
              path="/chat"
              element={
                <div className="personalchats">
                  <ChatSideBar />
                  <ChatWindow />
                </div>
              }
            />

            <Route
              path="/chat/:roomId"
              element={
                <div className="personalchats">
                  <ChatSideBar />
                  <ChatWindow />
                </div>
              }
            />

            <Route
              path="/groupchat/"
              element={
                <div className="groupchats">
                  <GroupChatsSideBar />
                  <GroupChatWindow />
                </div>
              }
            />
            <Route
              path="/groupchat/:roomId"
              element={
                <div className="groupchats">
                  <GroupChatsSideBar />
                  <GroupChatWindow />
                </div>
              }
            />
            <Route
              path="/stores"
              element={
                <div className="connect__stores">
                  <div className="addConnectStores">
                    <AddCircle /> ADD YOUR OWN CONNECT STORE
                  </div>
                  <StoreShowCase />
                </div>
              }
            />
          </Routes>
        </>
      ) : (
        <Login />
      )}
    </div>
  );
}

export default App;
