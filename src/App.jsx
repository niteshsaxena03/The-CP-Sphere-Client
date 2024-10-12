import "./App.css";
import { Route, Routes } from "react-router-dom";
import WelcomePage from "./pages/WelcomePage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import HomePage from "./pages/HomePage";
import ContestReminders from "./pages/ContestReminders";
import UserProfile from "./pages/UserProfile";
import UnsolvedQuestions from "./pages/UnsolvedQuestions";
import CPResources from "./pages/CPResources";
import DiscussionForum from "./pages/DiscussionForum";
import RankList from "./pages/RankList";
import ContactAdmin from "./pages/ContactAdmin";
import CPLearningResources from "./pages/CPLearningResources";

function App() {
  return (
    <Routes>
      <Route path="/" element={<WelcomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/contest-reminders" element={<ContestReminders />} />
      <Route path="/user-profile" element={<UserProfile />} />
      <Route path="/unsolved-questions" element={<UnsolvedQuestions />} />
      <Route path="/cp-resources" element={<CPResources />} />
      <Route path="/dsa-resources" element={<CPLearningResources />} />
      <Route path="/discussion-forum" element={<DiscussionForum />} />
      <Route path="/rank-list" element={<RankList />} />
      <Route path="/contact-admin" element={<ContactAdmin />} />
    </Routes>
  );
}

export default App;
