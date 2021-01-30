import React from 'react';
import { Link } from 'react-router-dom';
import Spark1 from '../common/apexChart/spark1'
import Spark2 from '../common/apexChart/spark2';
import Spark3 from '../common/apexChart/spark3';
import Spark7 from '../common/apexChart/spark7';

const Dashboard = () => {
    return (
        <>
            <div className="row clearfix">
                    <div className="col-12">
                        <form className="card" action="" method="post">
                            <div className="body">
                                <div className="row">
                                    <div className="col-lg-2 col-md-4 col-sm-6">
                                        <div className="form-group">
                                            <label className="form-label">ICO Token</label>
                                            <input type="email" className="form-control" placeholder="23097" />
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-md-4 col-sm-6">
                                        <div className="form-group">
                                            <label className="form-label">ETH</label>
                                            <input type="email" className="form-control" placeholder="2" />
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-md-4">
                                        <div className="form-group">
                                            <label className="form-label">Select</label>
                                            <select className="custom-select">
                                                <option defaultValue="">ETH</option>
                                                <option defaultValue="1">BTC</option>
                                                <option defaultValue="2">LTC</option>
                                                <option defaultValue="3">USDT</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-12">
                                        <div className="form-group">
                                            <label className="form-label">Wallet address</label>
                                            <input type="email" className="form-control" placeholder="0OXD38D9EEB5B93E1D3862727635E9" />
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-12">
                                        <div className="form-group">
                                            <label className="form-label">&nbsp;</label>
                                            <button type="submit" className="btn btn-success btn-block">Buy now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

            <div className="container-fluid">
                <div className="block-header">
                    <div className="row clearfix">
                        <div className="col-md-6 col-sm-12">
                            <h1>Cryptocurrency</h1>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to="/">Creative Platform</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">Cryptocurrency</li>
                                </ol>
                            </nav>
                        </div>
                        <div className="col-md-6 col-sm-12 text-right hidden-xs">
                            <a href="/" className="btn btn-sm btn-primary" title="">Create Campaign</a>
                            
                        </div>
                    </div>
                </div>

                <div className="row clearfix">
                    <div className="col-sm-6 col-lg-3">
                        <div className="card">
                            <div clasName="header">
                                <div className="row clearfix">
                                    <div className="col-auto">
                                        <div className="stamp">
                                            <img src="https://images.unsplash.com/photo-1559622023-04ca3ae5431d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=2600&q=80" className="w40" alt="Ja Music" />
                                            <h4>Ja Music</h4>
                                        </div>
                                        <div className="text-muted">Coverage Commercial (Audio)</div>
                                        <div className="h4 m-0">0.098140</div> 
                                    </div>
                                </div>
                            </div>
                            <div className="body">
                                <div className="row clearfix">
                                    <div className="col-12">
                                    <button className="btn btn-sm btn-outline-secondary mr-1" id="one_month">1M</button>
                                    <button className="btn btn-sm btn-outline-secondary mr-1" id="six_months">6M</button>
                                    <button className="btn btn-sm btn-outline-secondary mr-1 active" id="one_year">1Y</button>
                                    <button className="btn btn-sm btn-outline-secondary mr-1" id="ytd">YTD</button>
                                    <button className="btn btn-sm btn-outline-secondary" id="all">ALL</button>
                                    <div id="apexspark1">
                                        <Spark1 />
                                    </div>
                                    <div className="row clearfix">
                                        <div className="col text-right">
                                            {/* Action button */}
                                            
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                    <div className="card">
                            <div clasName="header">
                                <div className="row clearfix">
                                    <div className="col-auto">
                                        <div className="stamp">
                                            <img src="https://rooftopantics.com/wp-content/uploads/2019/04/popular_female_singers_2019_billie_eilish-1600x1067.jpg" className="w40" alt="Brightsta" />
                                            <h4>Brightsta</h4>
                                        </div>
                                        <div className="text-muted">Drama TV Show (Pilot)</div>
                                        <div className="h4 m-0">0.198052</div>
                                    </div>
                                </div>
                            </div>
                            <div className="body">
                                <div className="row clearfix">
                                    <div className="col-12">
                                    <button className="btn btn-sm btn-outline-secondary mr-1" id="one_month">1M</button>
                                    <button className="btn btn-sm btn-outline-secondary mr-1" id="six_months">6M</button>
                                    <button className="btn btn-sm btn-outline-secondary mr-1 active" id="one_year">1Y</button>
                                    <button className="btn btn-sm btn-outline-secondary mr-1" id="ytd">YTD</button>
                                    <button className="btn btn-sm btn-outline-secondary" id="all">ALL</button>
                                    <div id="apexspark2">
                                        <Spark2 />
                                    </div>
                                    <div className="row clearfix">
                                        <div className="col text-right">
                                            {/* Action button */}
                                            
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                    <div className="card">
                            <div clasName="header">
                                <div className="row clearfix">
                                    <div className="col-auto">
                                        <div className="stamp">
                                            <img src="https://scontent-lga3-2.xx.fbcdn.net/v/t1.0-9/67613363_2055827604522234_6058753301808152576_o.jpg?_nc_cat=104&ccb=2&_nc_sid=0debeb&_nc_ohc=PFO03XyYYPAAX_rlx_S&_nc_ht=scontent-lga3-2.xx&oh=0df3193f7ff4dfd451db90bbbcd83404&oe=603978B6" className="w40" alt="Glen" />
                                            <h4>Glen</h4>
                                        </div>
                                        <div className="text-muted">Model Y Commercial (Audio)</div>
                                        <div className="h4 m-0">0.017062</div>
                                    </div>
                                </div>
                            </div>
                            <div className="body">
                                <div className="row clearfix">
                                    <div className="col-12">
                                    <button className="btn btn-sm btn-outline-secondary mr-1" id="one_month">1M</button>
                                    <button className="btn btn-sm btn-outline-secondary mr-1" id="six_months">6M</button>
                                    <button className="btn btn-sm btn-outline-secondary mr-1 active" id="one_year">1Y</button>
                                    <button className="btn btn-sm btn-outline-secondary mr-1" id="ytd">YTD</button>
                                    <button className="btn btn-sm btn-outline-secondary" id="all">ALL</button>
                                    <div id="apexspark3">
                                        <Spark3 />
                                    </div>
                                    <div className="row clearfix">
                                        <div className="col text-right">
                                            {/* Action button */}
                                         
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-lg-3">
                    <div className="card">
                            <div clasName="header">
                                <div className="row clearfix">
                                    <div className="col-auto">
                                        <div className="stamp">
                                            <img src="https://makingmusicmag.com/wp-content/uploads/2019/10/Guitar-solo-pic-WEB.jpg" className="w40" alt="Netti" />
                                            <h4>Netti</h4>
                                        </div>
                                        <div className="text-muted">Movie Campaign (Trailer)</div>
                                        <div className="h4 m-0">0.017062</div>
                                    </div>
                                </div>
                            </div>
                            <div className="body">
                                <div className="row clearfix">
                                    <div className="col-12">
                                    <button className="btn btn-sm btn-outline-secondary mr-1" id="one_month">1M</button>
                                    <button className="btn btn-sm btn-outline-secondary mr-1" id="six_months">6M</button>
                                    <button className="btn btn-sm btn-outline-secondary mr-1 active" id="one_year">1Y</button>
                                    <button className="btn btn-sm btn-outline-secondary mr-1" id="ytd">YTD</button>
                                    <button className="btn btn-sm btn-outline-secondary" id="all">ALL</button>
                                    <div id="apexspark7">
                                        <Spark7 />
                                    </div>
                                    <div className="row clearfix">
                                        <div className="col text-right">
                                            {/* Action button */}
                                           
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row clearfix">
                    <div className="col-lg-3 col-md-4 col-sm-12">
                        <div className="card">
                            <div className="header">
                                <h2>My Watchlist </h2>
                            </div>
                            <table className="table table-hover table-custom spacing5 m-t--5 mb-0">
                                <tbody>
                                    <tr>
                                        <td className="font-weight-bold">BTC</td>
                                        <td className="text-right">50000.098140 <span className="text-success">(0.25%) <i className="fa fa-caret-up"></i></span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="font-weight-bold">ETH</td>
                                        <td className="text-right">1956.3 <span className="text-danger">(-0.15%) <i className="fa fa-caret-down"></i></span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="font-weight-bold">CRTV</td>
                                        <td className="text-right">89.74 <span className="text-success">(0.85%) <i className="fa fa-caret-up"></i></span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="font-weight-bold">AAVE</td>
                                        <td className="text-right">210.04 <span className="text-success">(0.65%) <i className="fa fa-caret-up"></i></span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="font-weight-bold">MATIC</td>
                                        <td className="text-right">110.04 <span className="text-success">(0.65%) <i className="fa fa-caret-up"></i></span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="font-weight-bold">GRT</td>
                                        <td className="text-right">28.47 <span className="text-danger">(-0.42%) <i className="fa fa-caret-down"></i></span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="font-weight-bold">GHST</td>
                                        <td className="text-right">18.75 <span className="text-danger">(-0.63%) <i className="fa fa-caret-down"></i></span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="col-lg-9 col-md-8 col-sm-12">
                        <div className="card">
                            <div className="header">
                                <h2>Monthly Overview</h2>
                            </div>
                            <div className="body">
                                <div id="chart-temperature" style={{ height: "315px" }}></div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div className="card">
                            <div className="header">
                                <h2>Transaction List</h2>
                            </div>
                            <ul className="nav nav-tabs3">
                                <li className="nav-item"><a className="nav-link active show" data-toggle="tab" href="#Buy-new2">Buy</a></li>
                                <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#Sell-new2">Sell</a></li>
                            </ul>
                            <div className="tab-content mt-0">
                                <div className="tab-pane active show" id="Buy-new2">
                                    <div className="table-responsive">
                                        <table className="table table-hover table-custom spacing8">
                                            <tbody>
                                                <tr>
                                                    <td className="w60"><img src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/2fd32b58324945.59f83720f0b79.jpg" alt="Coke" className="w30 rounded" /></td>
                                                    <td><p className="mb-0">Coca Cola</p></td>
                                                    <td><span>11:20AM 9 Jan 2021</span></td>
                                                    <td><span>OX874JKHJKFG76767DFD67</span></td>
                                                    <td><span className="badge badge-success">Completed</span></td>
                                                    <td><strong>0.108762 BTC</strong></td>
                                                    <td className="w100 text-info"><strong>$8,309</strong></td>
                                                    <td><button type="button" className="btn btn-default btn-sm mb-0"><span>View</span></button></td>
                                                </tr>
                                                <tr>
                                                    <td className="w60"><img src="https://fsa.zobj.net/crop.php?r=L8HK64RCSOae4dYLBEsB5v_ZZt5hVWfS5C1qL8s7CzRek-syB6Nyehsl8BbFgktB6v0iUDf_MTvetqC6szCwj1yjAQIUziCrekbaUjliOjfTTFXpnREYGYkXza3cH5TDiHqg5x6luPGKQN6j" alt="Nike" className="w30 rounded" /></td>
                                                    <td><p className="mb-0">Nike</p></td>
                                                    <td><span>11:20AM 21 Jan 2021</span></td>
                                                    <td><span>OX874JKHJKFG76767DFD67</span></td>
                                                    <td><span className="badge badge-warning">Processing</span></td>
                                                    <td><strong>0.108762 ETC</strong></td>
                                                    <td className="w100 text-info"><strong>$8,309</strong></td>
                                                    <td><button type="button" className="btn btn-default btn-sm mb-0"><span>View</span></button></td>
                                                </tr>
                                                <tr>
                                                    <td className="w60"><img src="https://cdn.redmondpie.com/wp-content/uploads/2014/04/Samsung-logo.png" alt="Samsung" className="w30 rounded" /></td>
                                                    <td><p className="mb-0">Samsung</p></td>
                                                    <td><span>11:20AM 11 Jan 2021</span></td>
                                                    <td><span>OX874JKHJKFG76767DFD67</span></td>
                                                    <td><span className="badge badge-success">Completed</span></td>
                                                    <td><strong>0.108762 ETH</strong></td>
                                                    <td className="w100 text-info"><strong>$11,309</strong></td>
                                                    <td><button type="button" className="btn btn-default btn-sm mb-0"><span>View</span></button></td>
                                                </tr>
                                                <tr>
                                                    <td className="w60"><img src="https://i1.wp.com/loveandtechop.com/wp-content/uploads/2020/04/unnamed.png?fit=512%2C257" alt="Dame Dash Studios" className="w30 rounded" /></td>
                                                    <td><p className="mb-0">Dame Dash Studios</p></td>
                                                    <td><span>12:20PM 5 Nov 2021</span></td>
                                                    <td><span>OX874JKHJKFG76767DFD67</span></td>
                                                    <td><span className="badge badge-success">Completed</span></td>
                                                    <td><strong>0.108762 NEO</strong></td>
                                                    <td className="w100 text-info"><strong>$3,102</strong></td>
                                                    <td><button type="button" className="btn btn-default btn-sm mb-0"><span>View</span></button></td>
                                                </tr>
                                                <tr>
                                                    <td className="w60"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATYAAACjCAMAAAA3vsLfAAAAkFBMVEUAAAAc54MjIyNaWlod7occ64UUekMPgkoWuGgDGg4ToVsd74cRi08b4oAb3n4LWTIJTSsb03cIIxIWl1QVrGENckEFLRka2XsACAQXvWse9osGNB0FKhgYxnAUpl4VsGQXmVQDFQwABgMNajwISCgKVjEHHQ8Qh0wHPiMLYDYYw28HPCIZznQRklMVfUQLRSZUENuRAAADOElEQVR4nO3bbV/aMBTG4XZLilBAqiAiKD6j+PT9v93mapuTLqVtrNq5//XO5nA09y8iTWPwAx4CAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAoLuG8yQzf2q9e2S6J2etd/9C50pn1KD17hvRfa/17l/oUIcZ3X5sPWW6E1ttxOaF2LwQmxdi80JsXojNC7F5ITYvxOaF2LwQm5f/JrbjfubYVX6RD/dv7YK+a8Qdmyy9tJrcipE2Z9k6Gdtimoy1yujR4+CmWL6N8/GTyBoZKTNyn110xxaKJhPZ4ygWTQ7an2x7RGyh1uKLP1/H855dvjAVamaNjM3r1H520R3byJTGdmzyh/lnYnPQKlnK8lqxxfVjU98zttclJ2dGbKnK2EIdivVGbKnq2EL9aMqJLVUjtjC+ysuJLVUnNr3Iy4ktVSe2UOflxJYqxvb2VNO+aD5dEVvKik2r8Tw1VvK6SYjYUtZdQnKdX5/MxYDaZJeJLWWttr4YWMnVNsyuEltK3sqvrRGZELEVlO+3TYmtHLF5ITYvxOaF2LwQm5d3xPZslcud7gab4tbTiqUp/7axiX2R327EjE0W7tjEwrS/Z0/G1ulHVw1jWztvuYLgIBED8V122R2bvG/T96bJSyiYXZcuahjbwLrDT6ZvFtaeicp7uGM7tYofsyZbsdbCcPQJk/fXMLbImlp+et7eaBrnPdyxnenqJnr7CZP31zC2Bys2N3Fv645tVqOJav9/S9rUMDbrfalEbD6ZuGM7rrGjrF4+fu7v0DS2TY2VYnqUHJ1ZV+Ymn5Z1UdPYgnHVlGPx61US26oytlj8ge2ixrFdVSw3nYgeZQe1oriiifWZsIMaxxYMd05Zj45Eben5tsHuJnPnKbEOaR5bEBUfbAlq9CBLy48FDuMdTZJO3yG88ogtWE21ck1aK3VmL5Mdpykf9lRJE334ITNt1flJfhAvtv9Rdi0O7xU/RPU3W3EMMDtGePq0KtRtRPe/3q5Ww1NHk23vouUpfoTJc5R5ts9O7ouRa8crlzezSLgrRvbqRfRw/m20m8yWnd72AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAISf8PALaY1KBHBDC9IAAAAASUVORK5CYII=" alt="Hulu" className="w30 rounded" /></td>
                                                    <td><p className="mb-0">Hulu</p></td>
                                                    <td><span>11:20AM 10 Jan 2021</span></td>
                                                    <td><span>OX874JKHJKFG76767DFD67</span></td>
                                                    <td><span className="badge badge-danger">Stopped</span></td>
                                                    <td><strong>0.108762 LTC</strong></td>
                                                    <td className="w100 text-info"><strong>$8,309</strong></td>
                                                    <td><button type="button" className="btn btn-default btn-sm mb-0"><span>View</span></button></td>
                                                </tr>
                                                <tr>
                                                    <td className="w60"><img src="https://moneyinc.com/wp-content/uploads/2018/06/Lamborghini.jpg" alt="Lamborghini" className="w30 rounded" /></td>
                                                    <td><p className="mb-0">Lamborghini</p></td>
                                                    <td><span>12:20PM 23 Jan 2021</span></td>
                                                    <td><span>OX874JKHJKFG76767DFD67</span></td>
                                                    <td><span className="badge badge-success">Completed</span></td>
                                                    <td><strong>0.108762 QTUM</strong></td>
                                                    <td className="w100 text-info"><strong>$3,102</strong></td>
                                                    <td><button type="button" className="btn btn-default btn-sm mb-0"><span>View</span></button></td>
                                                </tr>
                                                <tr>
                                                    <td className="w60"><img src="https://i.pinimg.com/474x/ac/f2/78/acf2782b17621afbd7b80eb0b719c25a.jpg" alt="Twittter" className="w30 rounded" /></td>
                                                    <td><p className="mb-0">Twitter</p></td>
                                                    <td><span>12:20PM 19 Jan 2021</span></td>
                                                    <td><span>OX874JKHJKFG76767DFD67</span></td>
                                                    <td><span className="badge badge-success">Completed</span></td>
                                                    <td><strong>0.108762 USDT</strong></td>
                                                    <td className="w100 text-info"><strong>$102</strong></td>
                                                    <td><button type="button" className="btn btn-default btn-sm mb-0"><span>View</span></button></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="tab-pane" id="Sell-new2">
                                    <div className="table-responsive">
                                        <table className="table table-hover table-custom spacing8">
                                            <tbody>
                                                <tr>
                                                    <td className="w60"><img src="../assets/images/coin/BTC.svg" alt="avatar" className="w30 rounded" /></td>
                                                    <td><p className="mb-0">Bitcoin</p></td>
                                                    <td><span>11:20AM 17 Jan 2021</span></td>
                                                    <td><span>OX874JKHJKFG76767DFD67</span></td>
                                                    <td><span className="badge badge-success">Completed</span></td>
                                                    <td><strong>0.108762 BTC</strong></td>
                                                    <td className="w100 text-info"><strong>$8,309</strong></td>
                                                    <td><button type="button" className="btn btn-default btn-sm mb-0"><span>View</span></button></td>
                                                </tr>
                                                <tr>
                                                    <td className="w60"><img src="../assets/images/coin/ETC.svg" alt="avatar" className="w30 rounded" /></td>
                                                    <td><p className="mb-0">Ethereum</p></td>
                                                    <td><span>11:20AM 22 Jan 2021</span></td>
                                                    <td><span>OX874JKHJKFG76767DFD67</span></td>
                                                    <td><span className="badge badge-success">Completed</span></td>
                                                    <td><strong>0.108762 ETH</strong></td>
                                                    <td className="w100 text-info"><strong>$11,309</strong></td>
                                                    <td><button type="button" className="btn btn-default btn-sm mb-0"><span>View</span></button></td>
                                                </tr>
                                                <tr>
                                                    <td className="w60"><img src="../assets/images/coin/qtum.svg" alt="avatar" className="w30 rounded" /></td>
                                                    <td><p className="mb-0">Qtum</p></td>
                                                    <td><span>12:20PM 27 Jan 2021</span></td>
                                                    <td><span>OX874JKHJKFG76767DFD67</span></td>
                                                    <td><span className="badge badge-success">Completed</span></td>
                                                    <td><strong>0.108762 QTUM</strong></td>
                                                    <td className="w100 text-info"><strong>$3,102</strong></td>
                                                    <td><button type="button" className="btn btn-default btn-sm mb-0"><span>View</span></button></td>
                                                </tr>
                                                <tr>
                                                    <td className="w60"><img src="../assets/images/coin/XRP.svg" alt="avatar" className="w30 rounded" /></td>
                                                    <td><p className="mb-0">Tether</p></td>
                                                    <td><span>12:20PM 24 Jan 2021</span></td>
                                                    <td><span>OX874JKHJKFG76767DFD67</span></td>
                                                    <td><span className="badge badge-success">Completed</span></td>
                                                    <td><strong>0.108762 USDT</strong></td>
                                                    <td className="w100 text-info"><strong>$102</strong></td>
                                                    <td><button type="button" className="btn btn-default btn-sm mb-0"><span>View</span></button></td>
                                                </tr>
                                                <tr>
                                                    <td className="w60"><img src="../assets/images/coin/ETH.svg" alt="avatar" className="w30 rounded" /></td>
                                                    <td><p className="mb-0">Ethereum Classic</p></td>
                                                    <td><span>11:20AM 28 Jan 2021</span></td>
                                                    <td><span>OX874JKHJKFG76767DFD67</span></td>
                                                    <td><span className="badge badge-warning">Processing</span></td>
                                                    <td><strong>0.108762 ETC</strong></td>
                                                    <td className="w100 text-info"><strong>$8,309</strong></td>
                                                    <td><button type="button" className="btn btn-default btn-sm mb-0"><span>View</span></button></td>
                                                </tr>
                                                <tr>
                                                    <td className="w60"><img src="../assets/images/coin/neo.svg" alt="avatar" className="w30 rounded" /></td>
                                                    <td><p className="mb-0">NEO</p></td>
                                                    <td><span>12:20PM 5 Nov 2018</span></td>
                                                    <td><span>OX874JKHJKFG76767DFD67</span></td>
                                                    <td><span className="badge badge-success">Completed</span></td>
                                                    <td><strong>0.108762 NEO</strong></td>
                                                    <td className="w100 text-info"><strong>$3,102</strong></td>
                                                    <td><button type="button" className="btn btn-default btn-sm mb-0"><span>View</span></button></td>
                                                </tr>
                                                <tr>
                                                    <td className="w60"><img src="../assets/images/coin/LTC.svg" alt="avatar" className="w30 rounded" /></td>
                                                    <td><p className="mb-0">Litecoin</p></td>
                                                    <td><span>11:20AM 7 Nov 2018</span></td>
                                                    <td><span>OX874JKHJKFG76767DFD67</span></td>
                                                    <td><span className="badge badge-danger">Stopped</span></td>
                                                    <td><strong>0.108762 LTC</strong></td>
                                                    <td className="w100 text-info"><strong>$8,309</strong></td>
                                                    <td><button type="button" className="btn btn-default btn-sm mb-0"><span>View</span></button></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );

}


export default Dashboard