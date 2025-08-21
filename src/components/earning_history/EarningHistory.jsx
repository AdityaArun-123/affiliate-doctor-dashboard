import React from 'react';
import './earning-history.css';

export const EarningHistory = () => {
  return (
    <>
      <div className="earning-history-section">
        <div className="overview-section">
          <div className="overview-header">
            <h2 className="overview-title">Earning History</h2>

            <div className='search-and-action-box'>
              <div className="search-bar">
                <img src="/Gallery/search.png" alt="" />
                <input type="text" placeholder="Search here" />
              </div>

              <div className="table-actions">
                <button className="control-btn">
                  <img src="/Gallery/refresh.png" alt="" />
                </button>
                <button className="control-btn">
                  <img src="/Gallery/sorting.png" alt="" />
                </button>
                <button className="control-btn">
                  <img src="/Gallery/filter.png" alt="" />
                </button>
              </div>
            </div>
          </div>
          <div className="table-container">
            <table>
              <thead>
                <tr>
                  <th className="checkbox-cell" />
                  <th>S. No.</th>
                  <th>Product Name</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Coupon/Link</th>
                  <th>Commission</th>
                  <th>Earning</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="checkbox-cell">
                    <input type="checkbox" />
                  </td>
                  <td>1.</td>
                  <td>
                    <div className="user-cell">
                      <img
                        src="/Gallery/boy_avatar.png"
                        alt=""
                        className="user-avatar"
                      />
                      <span className="user-name">Amrutam Nari Sondarya Malt</span>
                      <span className="user-badge">New</span>
                    </div>
                  </td>
                  <td>19 Oct, 2024</td>
                  <td>04 : 10 PM</td>
                  <td>AMU2344</td>
                  <td>15%</td>
                  <td>INR 120</td>
                  <td className='paid-status'>Paid</td>
                </tr>
                <tr>
                  <td className="checkbox-cell">
                    <input type="checkbox" />
                  </td>
                  <td>2.</td>
                  <td>
                    <div className="user-cell">
                      <img
                        src="/Gallery/boy_avatar.png"
                        alt=""
                        className="user-avatar"
                      />
                      <span className="user-name">Virat Kohli</span>
                    </div>
                  </td>
                  <td>19 Oct, 2024</td>
                  <td>05 : 10 PM</td>
                  <td>AMU2344</td>
                  <td>15%</td>
                  <td>INR 112</td>
                  <td className='paid-status'>Paid</td>
                </tr>
                <tr>
                  <td className="checkbox-cell">
                    <input type="checkbox" />
                  </td>
                  <td>3.</td>
                  <td>
                    <div className="user-cell">
                      <img
                        src="/Gallery/boy_avatar.png"
                        alt=""
                        className="user-avatar"
                      />
                      <span className="user-name">M.S Dhoni</span>
                    </div>
                  </td>
                  <td>18 Oct, 2024</td>
                  <td>06 : 10 PM</td>
                  <td>AMU2344</td>
                  <td>25%</td>
                  <td>INR 82</td>
                  <td className='pending-status'>Pending</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="pagination">
            <div className="pagination-info">Rows per page: 8</div>
            <div className="pagination-controls">
              <span className="pagination-text">1-8 of 80</span>
              <button className="pagination-btn">
                <img src="/Gallery/left-arrow.png" alt="" />
              </button>
              <button className="pagination-btn">
                <img src="/Gallery/right-arrow.png" alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
