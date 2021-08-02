import React from "react";
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import GenesisChapterSelect from "../Old Testament/Pentateuch/Genesis/GenesisChapterSelect";
import ExodusChapterSelect from "../Old Testament/Pentateuch/Exodus/ExodusChapterSelect";
import LeviticusChapterSelect from "../Old Testament/Pentateuch/Leviticus/LeviticusChapterSelect";

function BookSelectionPage() {
    return (
        <Router>
            <>
                <nav>
                    <table cellPadding={2} cellSpacing={2}>
                        <thead>
                        <tr>
                            <th>Old Testament</th>
                        </tr>
                        </thead>
                        <tr>
                            <td>
                                <Link to="/genesis"><p>Genesis</p></Link>
                            </td>
                            <td>
                                <Link to="/exodus"><p>Exodus</p></Link>
                            </td>
                            <td>
                                <Link to="/leviticus"><p>Leviticus</p></Link>
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
                <Route path="/leviticus">
                    <LeviticusChapterSelect />
                </Route>

            </>
        </Router>
    )
}

export default BookSelectionPage;