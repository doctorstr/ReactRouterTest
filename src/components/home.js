import React from 'react'
import '../stylesheets/adminlte.css'

export const Home = () => <div className="content-wrapper">

    <div className="content-header">
        <div className="container-fluid">
            <div className="row mb-2">
                <div className="col-sm-6">
                    <h1 className="m-0 text-dark">Starter Page</h1>
                </div>
                <div className="col-sm-6">
                    <ol className="breadcrumb float-sm-right">
                        <li className="breadcrumb-item">
                            <a href="#">Home</a>
                        </li>
                        <li className="breadcrumb-item active">Starter Page</li>
                    </ol>
                </div>
            </div>
        </div>
    </div>

    <div className="content">
        <div className="container-fluid">
            <div className="col-md-6">
                <div className="card">
                    <div className="card-header">
                        <h3 className="card-title">Bordered Table</h3>
                    </div>

                    <div className="card-body">
                        <table className="table table-bordered">
                            <tr>
                                <th
                                    style={{
                                    width: 10
                                }}>#</th>
                                <th>Task</th>
                                <th>Progress</th>
                                <th
                                    style={{
                                    width: 40
                                }}>Label</th>
                            </tr>
                            <tr>
                                <td>1.</td>
                                <td>Update software</td>
                                <td>
                                    <div className="progress progress-xs">
                                        <div
                                            className="progress-bar progress-bar-danger"
                                            style={{
                                            width: "55%"
                                        }}></div>
                                    </div>
                                </td>
                                <td>
                                    <span className="badge bg-danger">55%</span>
                                </td>
                            </tr>
                            <tr>
                                <td>2.</td>
                                <td>Clean database</td>
                                <td>
                                    <div className="progress progress-xs">
                                        <div
                                            className="progress-bar bg-warning"
                                            style={{
                                            width: "70%"
                                        }}></div>
                                    </div>
                                </td>
                                <td>
                                    <span className="badge bg-warning">70%</span>
                                </td>
                            </tr>
                            <tr>
                                <td>3.</td>
                                <td>Cron job running</td>
                                <td>
                                    <div className="progress progress-xs progress-striped active">
                                        <div
                                            className="progress-bar bg-primary"
                                            style={{
                                            width: "30%"
                                        }}></div>
                                    </div>
                                </td>
                                <td>
                                    <span className="badge bg-primary">30%</span>
                                </td>
                            </tr>
                            <tr>
                                <td>4.</td>
                                <td>Fix and squish bugs</td>
                                <td>
                                    <div className="progress progress-xs progress-striped active">
                                        <div
                                            className="progress-bar bg-success"
                                            style={{
                                            width: "90%"
                                        }}></div>
                                    </div>
                                </td>
                                <td>
                                    <span className="badge bg-success">90%</span>
                                </td>
                            </tr>
                        </table>
                    </div>
                    <div className="card-footer clearfix">
                        <ul className="pagination pagination-sm m-0 float-right">
                            <li className="page-item">
                                <a className="page-link" href="#">&laquo;</a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#">1</a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#">2</a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#">3</a>
                            </li>
                            <li className="page-item">
                                <a className="page-link" href="#">&raquo;</a>
                            </li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    </div>
    <aside className="control-sidebar control-sidebar-dark">
        <div className="p-3">
            <h5>Title</h5>
            <p>Sidebar content</p>
        </div>
    </aside>
</div>