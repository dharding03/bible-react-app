import React from "react";
import {BrowserRouter as Router, Switch, Route, Link,} from 'react-router-dom';
import Exodus1 from "../Exodus/Exodus1";
import Exodus2 from "../Exodus/Exodus2";
import Exodus3 from "../Exodus/Exodus3";
import Exodus4 from "../Exodus/Exodus4";
import Exodus5 from "../Exodus/Exodus5";
import Exodus6 from "../Exodus/Exodus6";
import Exodus7 from "../Exodus/Exodus7";
import Exodus8 from "../Exodus/Exodus8";
import Exodus9 from "../Exodus/Exodus9";
import Exodus10 from "../Exodus/Exodus10";
import Exodus11 from "../Exodus/Exodus11";
import Exodus12 from "../Exodus/Exodus12";
import Exodus13 from "../Exodus/Exodus13";
import Exodus14 from "../Exodus/Exodus14";
import Exodus15 from "../Exodus/Exodus15";
import Exodus16 from "../Exodus/Exodus16";
import Exodus17 from "../Exodus/Exodus17";
import Exodus18 from "../Exodus/Exodus18";
import Exodus19 from "../Exodus/Exodus19";
import Exodus20 from "../Exodus/Exodus20";
import Exodus21 from "../Exodus/Exodus21";
import Exodus22 from "../Exodus/Exodus22";
import Exodus23 from "../Exodus/Exodus23";
import Exodus24 from "../Exodus/Exodus24";
import Exodus25 from "../Exodus/Exodus25";
import Exodus26 from "../Exodus/Exodus26";
import Exodus27 from "../Exodus/Exodus27";
import Exodus28 from "../Exodus/Exodus28";
import Exodus29 from "../Exodus/Exodus29";
import Exodus30 from "../Exodus/Exodus30";
import Exodus31 from "../Exodus/Exodus31";
import Exodus32 from "../Exodus/Exodus32";
import Exodus33 from "../Exodus/Exodus33";
import Exodus34 from "../Exodus/Exodus34";
import Exodus35 from "../Exodus/Exodus35";
import Exodus36 from "../Exodus/Exodus36";
import Exodus37 from "../Exodus/Exodus37";
import Exodus38 from "../Exodus/Exodus38";
import Exodus39 from "../Exodus/Exodus39";
import Exodus40 from "../Exodus/Exodus40";

function ExodusChapterSelect() {
    return(
        <>
            <h1>Exodus chapter select</h1>

            <Router>
                <nav>
                    <table cellSpacing={5} cellPadding={5}>
                        <tr>
                            <td>
                                <Link to="/Exodus1">Chapter 1</Link>
                            </td>
                            <td>
                                <Link to="/Exodus2">Chapter 2</Link>
                            </td>
                            <td>
                                <Link to="/Exodus3">Chapter 3</Link>
                            </td>
                            <td>
                                <Link to="/Exodus4">Chapter 4</Link>
                            </td>
                            <td>
                                <Link to="/Exodus5">Chapter 5</Link>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Link to="/Exodus6">Chapter 6</Link>
                            </td>
                            <td>
                                <Link to="/Exodus7">Chapter 7</Link>
                            </td>
                            <td>
                                <Link to="/Exodus8">Chapter 8</Link>
                            </td>
                            <td>
                                <Link to="/Exodus9">Chapter 9</Link>
                            </td>
                            <td>
                                <Link to="/Exodus10">Chapter 10</Link>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Link to="/Exodus11">Chapter 11</Link>
                            </td>
                            <td>
                                <Link to="/Exodus12"> Chapter 12</Link>
                            </td>
                            <td>
                                <Link to="/Exodus13">Chapter 13</Link>
                            </td>
                            <td>
                                <Link to="/Exodus14">Chapter 14</Link>
                            </td>
                            <td>
                                <Link to="/Exodus15">Chapter 15</Link>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Link to="/Exodus16">Chapter 16</Link>
                            </td>
                            <td>
                                <Link to="/Exodus17">Chapter 17</Link>
                            </td>
                            <td>
                                <Link to="/Exodus18">Chapter 18</Link>
                            </td>
                            <td>
                                <Link to="/Exodus19">Chapter 19</Link>
                            </td>
                            <td>
                                <Link to="/Exodus20"> Chapter 20</Link>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Link to="/Exodus21">Chapter 21</Link>
                            </td>
                            <td>
                                <Link to="/Exodus22">Chapter 22</Link>
                            </td>
                            <td>
                                <Link to="/Exodus23">Chapter 23</Link>
                            </td>
                            <td>
                                <Link to="/Exodus24"> Chapter 24</Link>
                            </td>
                            <td>
                                <Link to="/Exodus25">Chapter 25</Link>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Link to="/Exodus26">Chapter 26</Link>
                            </td>
                            <td>
                                <Link to="/Exodus27">Chapter 27</Link>
                            </td>
                            <td>
                                <Link to="/Exodus28">Chapter 28</Link>
                            </td>
                            <td>
                                <Link to="/Exodus29">Chapter 29</Link>
                            </td>
                            <td>
                                <Link to="/Exodus30">Chapter 30</Link>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Link to="/Exodus31">Chapter 31</Link>
                            </td>
                            <td>
                                <Link to="/Exodus32">Chapter 32</Link>
                            </td>
                            <td>
                                <Link to="/Exodus33">Chapter 33</Link>
                            </td>
                            <td>
                                <Link to="/Exodus34">Chapter 34</Link>
                            </td>
                            <td>
                                <Link to="/Exodus35">Chapter 35</Link>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Link to="/Exodus36">Chapter 36</Link>
                            </td>
                            <td>
                                <Link to="/Exodus37">Chapter 37</Link>
                            </td>
                            <td>
                                <Link to="/Exodus38">Chapter 38</Link>
                            </td>
                            <td>
                                <Link to="/Exodus39">Chapter 39</Link>
                            </td>
                            <td>
                                <Link to="/Exodus40">Chapter 40</Link>
                            </td>
                        </tr>
                    </table>
                </nav>
                <Switch>
                    <Route path="/Exodus1" component={Exodus1}/>
                    <Route path="/Exodus2" component={Exodus2}/>
                    <Route path="/Exodus3" component={Exodus3}/>
                    <Route path="/Exodus4" component={Exodus4}/>
                    <Route path="/Exodus5" component={Exodus5}/>
                    <Route path="/Exodus6" component={Exodus6}/>
                    <Route path="/Exodus7" component={Exodus7}/>
                    <Route path="/Exodus8" component={Exodus8}/>
                    <Route path="/Exodus9" component={Exodus9}/>
                    <Route path="/Exodus10" component={Exodus10}/>
                    <Route path="/Exodus11" component={Exodus11}/>
                    <Route path="/Exodus12" component={Exodus12}/>
                    <Route path="/Exodus13" component={Exodus13}/>
                    <Route path="/Exodus14" component={Exodus14}/>
                    <Route path="/Exodus15" component={Exodus15}/>
                    <Route path="/Exodus16" component={Exodus16}/>
                    <Route path="/Exodus17" component={Exodus17}/>
                    <Route path="/Exodus18" component={Exodus18}/>
                    <Route path="/Exodus19" component={Exodus19}/>
                    <Route path="/Exodus20" component={Exodus20}/>
                    <Route path="/Exodus21" component={Exodus21}/>
                    <Route path="/Exodus22" component={Exodus22}/>
                    <Route path="/Exodus23" component={Exodus23}/>
                    <Route path="/Exodus24" component={Exodus24}/>
                    <Route path="/Exodus25" component={Exodus25}/>
                    <Route path="/Exodus26" component={Exodus26}/>
                    <Route path="/Exodus27" component={Exodus27}/>
                    <Route path="/Exodus28" component={Exodus28}/>
                    <Route path="/Exodus29" component={Exodus29}/>
                    <Route path="/Exodus30" component={Exodus30}/>
                    <Route path="/Exodus31" component={Exodus31}/>
                    <Route path="/Exodus32" component={Exodus32}/>
                    <Route path="/Exodus33" component={Exodus33}/>
                    <Route path="/Exodus34" component={Exodus34}/>
                    <Route path="/Exodus35" component={Exodus35}/>
                    <Route path="/Exodus36" component={Exodus36}/>
                    <Route path="/Exodus37" component={Exodus37}/>
                    <Route path="/Exodus38" component={Exodus38}/>
                    <Route path="/Exodus39" component={Exodus39}/>
                    <Route path="/Exodus40" component={Exodus40}/>
                </Switch>
            </Router>
        </>
    )
}

export default ExodusChapterSelect;