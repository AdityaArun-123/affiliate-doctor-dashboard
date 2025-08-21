import React from 'react'
import { MetricCards } from '../metric_cards/MetricCards'

export const DashBoard = () => {

  const metricCardsData = [
    {
      metricHeader: "Total Coupons clicks",
      metricImgae: "/Gallery/calendar.png",
      metricNumber: "255",
      metricPeriod: "/month"
    },
    {
      metricHeader: "Total Orders",
      metricImgae: "/Gallery/order.png",
      metricNumber: "55",
      metricPeriod: "/month"
    },
    {
      metricHeader: "Total Revenue",
      metricImgae: "/Gallery/revenue.png",
      metricNumber: "5,540",
      metricPeriod: "/month"
    },
    {
      metricHeader: "Total Link/Coupan",
      metricImgae: "/Gallery/link.png",
      metricNumber: "5",
      metricPeriod: "/month"
    }
  ]

  return (
    <>
      <div className="main-dashboard-container">
        <div className="tab-navigation">
          <div className="tab-item">Today So Far</div>
          <div className="tab-item">Week So Far</div>
          <div className="tab-item active">Month So Far</div>
          <div className="tab-item">Custom</div>
        </div>

        <MetricCards metricCardsData={metricCardsData} />

        <div className="overview-section">
          <div className="overview-header">
            <h2 className="overview-title">Referral Overview</h2>

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
                  <th>Clicks</th>
                  <th>Orders</th>
                  <th>Revenue</th>
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
                      <span className="user-name">Aditya Arun</span>
                      <span className="user-badge">New</span>
                    </div>
                  </td>
                  <td>19 Oct, 2024</td>
                  <td>04 : 10 PM</td>
                  <td>AMU2344</td>
                  <td>15%</td>
                  <td>2</td>
                  <td>2</td>
                  <td>345</td>
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
                  <td>4</td>
                  <td>4</td>
                  <td>564</td>
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
                  <td>1</td>
                  <td>1</td>
                  <td>200</td>
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
