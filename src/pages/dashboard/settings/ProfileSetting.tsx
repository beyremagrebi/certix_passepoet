import { useState } from "react";
import { Avatar } from "../../../components/ui/global/Avatar";
import { Button } from "../../../components/ui/global/Button";
import { Card } from "../../../components/ui/global/Card";
import { Input } from "../../../components/ui/global/Input";
import { Select } from "../../../components/ui/global/Select";
import { TextArea } from "../../../components/ui/global/TextArea";
import { Label } from "../../../components/ui/typography/Label";
import { SectionHeader } from "./SectionHeader";

export function ProfileSetting() {

    const [profile, setProfile] = useState({
        firstName: "Bayrem",
        lastName: "Agrebi",
        username: "beyrem.agrebi",
        email: "bayrem@agrebi.com",
        website: "https://example.com",
        university: "University of Carthage",
        club: "Innovate Club",
        studyProgram: "Computer Science BSc",
        year: "Year 3",
        bio: "Student builder focused on product design and community impact projects.",
    });


    const updateProfile = (field: keyof typeof profile, value: string) => {
        setProfile((current) => ({ ...current, [field]: value }));
    };

    return <Card >
        <div >
            <SectionHeader
                size="small"
                title="Profile"
                description="Update your personal information."
            />

        </div>

        <div className="settings-divider" />

        <div className="settings-cover">
            <div className="settings-cover-actions">
                <Button type="button" size="medium" variant="secondary">
                    Update cover
                </Button>
                <Button type="button" size="medium" variant="secondary">
                    Remove cover
                </Button>
            </div>
        </div>

        <div className="settings-avatar-row">
            <Avatar
                name={`${profile.firstName} ${profile.lastName}`}
                size="extra-large"
                className="settings-profile-avatar"
            />
            <div className="settings-avatar-actions">

                <div className="settings-inline-actions">
                    <Button type="button" size="medium" variant="secondary">
                        Update avatar
                    </Button>
                    <Button type="button" size="medium" >
                        Remove
                    </Button>
                </div>
            </div>
        </div>

        <div className="settings-form-grid">
            <div className="settings-field">
                <Label size="medium" htmlFor="firstName" required>First name</Label>
                <Input
                    size="medium"
                    id="firstName"
                    value={profile.firstName}
                    onChange={(e) => updateProfile("firstName", e.target.value)}
                />
            </div>

            <div className="settings-field">
                <Label size="medium" htmlFor="lastName" required>Last name</Label>
                <Input
                    id="lastName"
                    size="medium"
                    value={profile.lastName}
                    onChange={(e) => updateProfile("lastName", e.target.value)}
                />
            </div>



            <div className="settings-field">
                <Label size="medium" htmlFor="email" required>Email address</Label>
                <Input
                    id="email"
                    size="medium"
                    type="email"
                    value={profile.email}
                    onChange={(e) => updateProfile("email", e.target.value)}
                />
            </div>

            <div className="settings-field">
                <Label size="medium" htmlFor="website" >Website</Label>
                <Input
                    id="website"
                    size="medium"
                    value={profile.website}
                    onChange={(e) => updateProfile("website", e.target.value)}
                />
            </div>

            <div className="settings-field">
                <Label size="medium" htmlFor="university" >University</Label>
                <Input
                    id="university"
                    size="medium"
                    value={profile.university}
                    onChange={(e) => updateProfile("university", e.target.value)}
                />
            </div>

            <div className="settings-field">
                <Label size="medium" htmlFor="club">Club</Label>
                <Input
                    id="club"
                    size="medium"
                    value={profile.club}
                    onChange={(e) => updateProfile("club", e.target.value)}
                />
            </div>

            <div className="settings-field">
                <Label size="medium" htmlFor="studyProgram">Study program</Label>
                <Select
                    size="medium"
                    id="studyProgram"
                    value={profile.studyProgram}
                    onChange={(e) => updateProfile("studyProgram", e.target.value)}
                    placeholder="Select your study program"
                    fullWidth
                >
                    <option value="computer-science">Computer Science</option>
                    <option value="software-engineering">Software Engineering</option>
                    <option value="information-technology">Information Technology</option>
                    <option value="business-administration">Business Administration</option>
                    <option value="other">Other</option>
                </Select>
            </div>

            <div className="settings-field">
                <Label htmlFor="year">Academic year</Label>
                <Input
                    id="year"
                    value={profile.year}
                    onChange={(e) => updateProfile("year", e.target.value)}
                />
            </div>

            <div className="settings-field settings-field--full">
                <Label htmlFor="bio">Short bio</Label>
                <TextArea
                    size="medium"
                    id="bio"
                    rows={3}
                    value={profile.bio}
                    onChange={(e) => updateProfile("bio", e.target.value)}
                />
            </div>
        </div>

        <div className="settings-form-actions">
            <Button type="button" size="medium">
                Save changes
            </Button>
            <Button type="button" size="medium" variant="secondary">
                Cancel
            </Button>
        </div>
    </Card>
}