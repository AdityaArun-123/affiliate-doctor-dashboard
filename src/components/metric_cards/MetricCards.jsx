import React from 'react'

export const MetricCards = ({ metricCardsData }) => {
    return (
        <>
            <div className="metrics-grid">
                {metricCardsData.map((item, index) => (
                    <div className="metric-card" key={index}>
                        <h3>{item.metricHeader}</h3>
                        <div className="metric-value">
                            <div className="metric-icon">
                                <img src={item.metricImgae} alt={item.metricHeader} />
                            </div>
                            <div>
                                <span className="metric-number">{item.metricNumber}</span>
                                <span className="metric-period">{item.metricPeriod}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}
