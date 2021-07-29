import React from "react";
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import GenesisChapterSelect from "../Old Testament/Pentateuch/Genesis/GenesisChapterSelect";
import ExodusChapterSelect from "../Old Testament/Pentateuch/Exodus/ExodusChapterSelect";

function BookSelectionPage() {
    return (
        <Router>
            <>
                <h1>Greetings</h1>
                <nav>
                    <table cellPadding={0} cellSpacing={0}>
                        <thead>
                        <tr>
                            <th>Old Testament</th>
                        </tr>
                        </thead>
                        <tr>
                            <td>
                                <Link to="/genesis"><p>Genesis</p></Link>
                                <Link to="/exodus"><p>Exodus</p></Link>
                            </td>
                        </tr>

                    </table>
                </nav>
                <Route path="/genesis">
                    <GenesisChapterSelect/>
                </Route>
                <Route path="/exodus">
                    <ExodusChapterSelect />
                </Route>

            </>
        </Router>
    )
}

export default BookSelectionPage;