import React, { useState } from 'react';
import './referal-tool.css';
import { MetricCards } from '../metric_cards/MetricCards';

export const ReferalTool = () => {
  const [showProductCoupanSection, setShowProductCoupanSection] = useState(false);
  const [showProductDropDown, setShowProductDropDown] = useState(false);
  const [selected, setSelected] = useState("abc");

  const toggleProductDropDown = () => {
    setShowProductDropDown(!showProductDropDown);
  }

  const handleSelect = (value) => {
    setSelected(value);
    setShowProductDropDown(false);
    document.getElementById("selected-product-name").style.visibility = "visible";
  }

  const showproductCoupanSection = () => {
    if (!selected.includes("abc")) {
      setShowProductCoupanSection(true);
    } else {
      alert("Please enter or select the name of product you want to refer to your patient!!!");
    }
  }

  const metricCardsData = [
    {
      metricHeader: "Total Referral",
      metricImgae: "/Gallery/calendar.png",
      metricNumber: "255",
    },
    {
      metricHeader: "Total Orders",
      metricImgae: "/Gallery/order.png",
      metricNumber: "55",
    },
    {
      metricHeader: "Total Revenue",
      metricImgae: "/Gallery/revenue.png",
      metricNumber: "5,540",
    },
    {
      metricHeader: "Total Link/Coupan",
      metricImgae: "/Gallery/link.png",
      metricNumber: "5",
    }
  ]

  return (
    <>
      <div className="referal-tool-container">
        <div className="section product-link-section">
          <label htmlFor="product">Product Link/Coupon</label>

          <div class="dropdown" onClick={toggleProductDropDown}>
            <div class="dropdown-label">Enter the name of Product <span>*</span></div>
            <span className='selected-product' id='selected-product-name'>{selected}</span>
            <img src="/Gallery/down-arrow.png" alt="" />
            <ul class={showProductDropDown ? "dropdown-list active" : "dropdown-list"}>
              <li onClick={() => { handleSelect("Amrutam Nari Sondarya Malt") }}>Amrutam Nari Sondarya Malt</li>
              <li onClick={() => { handleSelect("Product 1") }}>Product 1</li>
              <li onClick={() => { handleSelect("Product 2") }}>Product 2</li>
            </ul>
          </div>
          {
            showProductCoupanSection ? "" : (
              <div className="product-link-btn">
                <button className="btn" onClick={showproductCoupanSection}>Get</button>
              </div>)
          }

          {
            showProductCoupanSection && (
              <div>
                <div class="product-coupan-section">
                  <div class="product-image">
                    <img src="/Gallery/product.png" alt="Product Image" />
                  </div>

                  <div class="product-info">

                    <div class="field">
                      <label class="label">Product Link</label>
                      <div class="product-coupan-fields">
                        <input type="text" value="https://www.amrutam.global//nari-sondarya-malt?" readonly />
                        <button class="btn">Copy</button>
                      </div>
                    </div>

                    <div class="field">
                      <label class="label">Product Coupon Code</label>
                      <div class="product-coupan-fields">
                        <input type="text" value="AMU7382478" readonly />
                        <button class="btn">Copy</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="note product-coupan-section-note">
                  <b>Note :- </b> Share this Link/Coupon with your patient. For every purchase someone makes using your Link/Coupon. You get credit.
                </div>
              </div>
            )
          }
        </div>
        {
          showProductCoupanSection && <MetricCards metricCardsData={metricCardsData} />
        }
        <div className="section cart-discount-section">
          <label htmlFor="discount">Cart Discount</label>
          <div className='cart-discount-fields'>
            <input type="text" id="discount" defaultValue="DRLIAM2374" readOnly="" />
            <button className="btn">Copy</button>
          </div>
          <p className="note">
            <b>Note :- </b> Share this Link/Coupon with your patient. For every purchase someone
            makes using your Link/Coupon. You get credit.
          </p>
        </div>
      </div>
    </>
  )
}
