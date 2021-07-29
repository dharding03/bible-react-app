import React from "react";
// import GenesisChapterSelect from "../Old Testament/Pentateuch/Genesis/GenesisChapterSelect";
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import GenesisChapterSelect from "../Old Testament/Pentateuch/Genesis/GenesisChapterSelect";

function BookSelectionPage() {
    return (
        <Router>
            <>
                <h1>Greetings</h1>
                <nav>
                    <table cellPadding={5} cellSpacing={5}>
                        <thead>
                        <tr>
                            <th>Old Testament</th>
                        </tr>
                        </thead>
                        <tr>
                            <td>
                                <Link to="/genesis"><p>Genesis</p></Link>
                            </td>
                        </tr>

                    </table>
                </nav>
                <Route path="/genesis">
                    <GenesisChapterSelect/>
                </Route>

            </>
        </Router>
    )
}

export default BookSelectionPage;