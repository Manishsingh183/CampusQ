import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App"
import {BrowserRouter} from 'react-router-dom';
import {Routes,Route} from 'react-router-dom';



import Post from "./Pages/Post/post";
import Collab from './Pages/Collab/collab';
import Contact from './Pages/Conatct/contact';
import AskQue from "./Pages/Askque/Askque";
import NotFound from './Pages/NotFound/Notfound';
import AddProject from './Pages/AddProject/AddProject';
import AddSelf from './Pages/AddSelf/AddSelf';




ReactDOM.render(<BrowserRouter>
              <Routes>
                  <Route path="/" element={<App />} />
                  <Route path="contact" element={<Contact />} />
                  <Route path="collab" element={<Collab />} />
                  <Route path="posts/:cardId" element={<Post />} />
                  <Route path="askque" element={<AskQue />} />
                  <Route path="resources" element={<NotFound />} />
                  <Route path="add_proj" element={<AddProject />} />
                  <Route path="add_self" element={<AddSelf />} />
                  <Route path="auth/google"/>
              </Routes>
            </BrowserRouter>, document.getElementById("root"));