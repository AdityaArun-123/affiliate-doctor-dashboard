import React from 'react';
import './onboarding-modal.css';

export const OnboardingModal = ({onGetStarted}) => {
    return (
        <>
            <div className="modal-overlay">
                <div className="modal-container">
                    {/* Illustration */}
                    <div className="modal-illustration">
                        <img src="/Gallery/affiliate-modal-img.png" alt="Affiliate Earnings" />
                    </div>

                    {/* Content */}
                    <h2 className="modal-title">Introducing Affiliate Earnings</h2>
                    <p className="modal-description">
                        Start earning by recommending Amrutam products
                        in your patient routines.
                        <br />
                        Get commissions for every successful referral
                        through your unique link or coupon.
                    </p>

                    {/* CTA Button */}
                    <button className="modal-button" onClick={onGetStarted}>
                        Get Started
                    </button>
                </div>
            </div>
        </>
    )
}
