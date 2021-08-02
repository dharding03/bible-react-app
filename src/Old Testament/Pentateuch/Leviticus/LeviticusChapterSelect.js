import React from 'react';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import Leviticus1 from "../Leviticus/Leviticus1";
import Leviticus2 from "../Leviticus/Leviticus2";
import Leviticus3 from "../Leviticus/Leviticus3";
import Leviticus4 from "../Leviticus/Leviticus4";
import Leviticus5 from "../Leviticus/Leviticus5";
import Leviticus6 from "../Leviticus/Leviticus6";
import Leviticus7 from "../Leviticus/Leviticus7";
import Leviticus8 from "../Leviticus/Leviticus8";
import Leviticus9 from "../Leviticus/Leviticus9";
import Leviticus10 from "../Leviticus/Leviticus10";
import Leviticus11 from "../Leviticus/Leviticus11";
import Leviticus12 from "../Leviticus/Leviticus12";
import Leviticus13 from "../Leviticus/Leviticus13";
import Leviticus14 from "../Leviticus/Leviticus14";
import Leviticus15 from "../Leviticus/Leviticus15";
import Leviticus16 from "../Leviticus/Leviticus16";
import Leviticus17 from "../Leviticus/Leviticus17";
import Leviticus18 from "../Leviticus/Leviticus18";
import Leviticus19 from "../Leviticus/Leviticus19";
import Leviticus20 from "../Leviticus/Leviticus20";
import Leviticus21 from "../Leviticus/Leviticus21";
import Leviticus22 from "../Leviticus/Leviticus22";
import Leviticus23 from "../Leviticus/Leviticus23";
import Leviticus24 from "../Leviticus/Leviticus24";
import Leviticus25 from "../Leviticus/Leviticus25";
import Leviticus26 from "../Leviticus/Leviticus26";
import Leviticus27 from "../Leviticus/Leviticus27";


function LeviticusChapterSelect() {
    return(
        <>
        <h1>Leviticus Chapter Select</h1>

            <Router>
                <nav>
                    <table cellSpacing={5} cellPadding={5}>
                        <tr>
                            <td>
                                <Link to="/Leviticus1">Chapter 1</Link>
                            </td>
                            <td>
                                <Link to="/Leviticus2">Chapter 2</Link>
                            </td>
                            <td>
                                <Link to="/Leviticus3">Chapter 3</Link>
                            </td>
                            <td>
                                <Link to="/Leviticus4">Chapter 4</Link>
                            </td>
                            <td>
                                <Link to="/Leviticus5">Chapter 5</Link>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Link to="/Leviticus6">Chapter 6</Link>
                            </td>
                            <td>
                                <Link to="/Leviticus7">Chapter 7</Link>
                            </td>
                            <td>
                                <Link to="/Leviticus8">Chapter 8</Link>
                            </td>
                            <td>
                                <Link to="/Leviticus9">Chapter 9</Link>
                            </td>
                            <td>
                                <Link to="/Leviticus10">Chapter 10</Link>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Link to="/Leviticus11">Chapter 11</Link>
                            </td>
                            <td>
                                <Link to="/Leviticus12"> Chapter 12</Link>
                            </td>
                            <td>
                                <Link to="/Leviticus13">Chapter 13</Link>
                            </td>
                            <td>
                                <Link to="/Leviticus14">Chapter 14</Link>
                            </td>
                            <td>
                                <Link to="/Leviticus15">Chapter 15</Link>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Link to="/Leviticus16">Chapter 16</Link>
                            </td>
                            <td>
                                <Link to="/Leviticus17">Chapter 17</Link>
                            </td>
                            <td>
                                <Link to="/Leviticus18">Chapter 18</Link>
                            </td>
                            <td>
                                <Link to="/Leviticus19">Chapter 19</Link>
                            </td>
                            <td>
                                <Link to="/Leviticus20"> Chapter 20</Link>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Link to="/Leviticus21">Chapter 21</Link>
                            </td>
                            <td>
                                <Link to="/Leviticus22">Chapter 22</Link>
                            </td>
                            <td>
                                <Link to="/Leviticus23">Chapter 23</Link>
                            </td>
                            <td>
                                <Link to="/Leviticus24"> Chapter 24</Link>
                            </td>
                            <td>
                                <Link to="/Leviticus25">Chapter 25</Link>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <Link to="/Leviticus26">Chapter 26</Link>
                            </td>
                            <td>
                                <Link to="/Leviticus27">Chapter 27</Link>
                            </td>
                        </tr>
                    </table>
                </nav>
                <Switch>
                    <Route path="/Leviticus1" component={Leviticus1}/>
                    <Route path="/Leviticus2" component={Leviticus2}/>
                    <Route path="/Leviticus3" component={Leviticus3}/>
                    <Route path="/Leviticus4" component={Leviticus4}/>
                    <Route path="/Leviticus5" component={Leviticus5}/>
                    <Route path="/Leviticus6" component={Leviticus6}/>
                    <Route path="/Leviticus7" component={Leviticus7}/>
                    <Route path="/Leviticus8" component={Leviticus8}/>
                    <Route path="/Leviticus9" component={Leviticus9}/>
                    <Route path="/Leviticus10" component={Leviticus10}/>
                    <Route path="/Leviticus11" component={Leviticus11}/>
                    <Route path="/Leviticus12" component={Leviticus12}/>
                    <Route path="/Leviticus13" component={Leviticus13}/>
                    <Route path="/Leviticus14" component={Leviticus14}/>
                    <Route path="/Leviticus15" component={Leviticus15}/>
                    <Route path="/Leviticus16" component={Leviticus16}/>
                    <Route path="/Leviticus17" component={Leviticus17}/>
                    <Route path="/Leviticus18" component={Leviticus18}/>
                    <Route path="/Leviticus19" component={Leviticus19}/>
                    <Route path="/Leviticus20" component={Leviticus20}/>
                    <Route path="/Leviticus21" component={Leviticus21}/>
                    <Route path="/Leviticus22" component={Leviticus22}/>
                    <Route path="/Leviticus23" component={Leviticus23}/>
                    <Route path="/Leviticus24" component={Leviticus24}/>
                    <Route path="/Leviticus25" component={Leviticus25}/>
                    <Route path="/Leviticus26" component={Leviticus26}/>
                    <Route path="/Leviticus27" component={Leviticus27}/>

                </Switch>
            </Router>
            
        </>
    )
}

export default LeviticusChapterSelect;