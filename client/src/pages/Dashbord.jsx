import { UserContext } from "../context/UserContext";
import { useContext } from "react";
import styles from './dashbord.module.scss';
import '@fortawesome/fontawesome-free/css/all.css';


function Dashboard() {
    const { user } = useContext(UserContext);

    return (
        <div>
            <div className={styles.container}>
                <nav>
                    <div className={styles.navbar}>
                        <div className={styles.logo}>
                            {/* <img src="/pic/logo.jpg" alt="" /> */}
                            <h1>jobs</h1>
                        </div>
                        <ul>
                            <li>
                                <a href="#">
                                    <i className="fas fa-user"></i>
                                    <span className={styles['nav-item']}>Dashboard</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="fas fa-chart-bar"></i>
                                    <span className={styles['nav-item']}>Analytics</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="fas fa-tasks"></i>
                                    <span className={styles['nav-item']}>Jobs Board</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="fab fa-dochub"></i>
                                    <span className={styles['nav-item']}>Documents</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="fas fa-cog"></i>
                                    <span className={styles['nav-item']}>Setting</span>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="fas fa-question-circle"></i>
                                    <span className={styles['nav-item']}>Help</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className={styles.logout}>
                                    <i className="fas fa-sign-out-alt"></i>
                                    <span className={styles['nav-item']}>Logout</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <section className={styles.main}>
                    <div className={styles['main-top']}>
                        <p>Explore the universe!</p>
                    </div>
                    <br></br>
                    <div className={styles['main-body']}>
                        <h1>Recent Jobs</h1>
                    <br></br>

                        <div className={styles.search_bar}>
                            <input type="search" placeholder="Search job here..." />
                    <br></br>

                            <select name="" id="">
                                <option>Category</option>
                                <option>Web Design</option>
                                <option>App Design</option>
                                <option>App Development</option>
                            </select>
                            <select className={styles.filter}>
                                <option>Filter</option>
                            </select>
                        </div>
                    <br></br>
                    <br></br>
                    <br></br>

                        <div className={styles.tags_bar}>
                            <div className={styles.tag}>
                                <i className="fas fa-times"></i>
                                <span>Programming</span>
                            </div>
                            <div className={styles.tag}>
                                <i className="fas fa-times"></i>
                                <span>Design</span>
                            </div>
                            <div className={styles.tag}>
                                <i className="fas fa-times"></i>
                                <span>PHP</span>
                            </div>
                            <div className={styles.tag}>
                                <i className="fas fa-times"></i>
                                <span>JavaScript</span>
                            </div>
                        </div>
                        <div className={styles.row}>
                            <p>There are more than <span>400</span> Jobs</p>
                            <a href="#">See all</a>
                        </div>
                        <div className={styles.job_card}>
                            <div className={styles.job_details}>
                                <div className={styles.img}>
                                    <i className="fab fa-google-drive"></i>
                                </div>
                                <div className={styles.text}>
                                    <h2>UX Designer</h2>
                                    <span>Google Drive - Junior Post</span>
                                </div>
                            </div>
                            <div className={styles.job_salary}>
                                <h4>$6.7 - $12.5k /yr</h4>
                                <span>1 days ago</span>
                            </div>
                        </div>
                        {/* Additional job cards */}
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Dashboard;
