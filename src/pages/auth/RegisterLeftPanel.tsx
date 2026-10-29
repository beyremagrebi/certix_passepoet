import { Body } from "../../components/ui/typography/Body";
import { Label } from "../../components/ui/typography/Label";
import { Title } from "../../components/ui/typography/Title";

export default function RegisterLeftPanel() {
    return (
        <section className="login-visual">
            <div className="login-brand">
                <span className="login-brand-icon">C</span>
                <Body size="large">Certix</Body>
            </div>

            <div className="login-visual-content">
                <Label size="small">
                    YOUR JOURNEY STARTS HERE.
                </Label>

                <Title size="large" className="login-hero-title">
                    Every achievement,
                    <span> starts with you.</span>
                </Title>

                <Body size="medium" className="login-hero-description">
                    Create your digital passport and bring your certificates,
                    skills, experiences, and accomplishments together in
                    one place.
                </Body>

                <div className="login-illustration" aria-hidden="true">
                    <div className="visual-orbit visual-orbit-one" />
                    <div className="visual-orbit visual-orbit-two" />

                    <div className="visual-certificate">
                        <div className="visual-certificate-top">
                            <span className="visual-certificate-icon">C</span>

                            <Label size="small">
                                YOUR PROFILE
                            </Label>
                        </div>

                        <div className="visual-line visual-line-short" />
                        <div className="visual-line visual-line-long" />
                        <div className="visual-line visual-line-medium" />

                        <div className="visual-certificate-bottom">
                            <div className="visual-avatar">C</div>

                            <div className="visual-signature">
                                <div className="visual-line" />
                                <Body size="small">
                                    Your digital passport
                                </Body>
                            </div>

                            <div className="visual-seal">✓</div>
                        </div>
                    </div>

                    <div className="visual-floating-card">
                        <span className="visual-check">✓</span>

                        <div>
                            <Body size="small">
                                Your journey begins
                            </Body>

                            <Label size="small">
                                Build your digital identity
                            </Label>
                        </div>
                    </div>
                </div>
            </div>

            <Body size="small" className="login-visual-footer">
                Your achievements deserve to be seen.
            </Body>
        </section>
    );
}