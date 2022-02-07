import { getProfiles } from '../../actions/profilesAction';
import { useSelector, useDispatch } from 'react-redux';
import './profiles.css';
import { useEffect } from 'react';
import ProfileItem from './ProfileItem';

const Profiles = () => {
    const dispatch = useDispatch();
    const profilesState = useSelector((state) => state.profiles);
    const { loading, profiles } = profilesState;

    useEffect(() => {
        dispatch(getProfiles());
    }, [dispatch]);
    return (
        <div className="profiles-container">
            {loading ? (
                <div>Loading...</div>
            ) : (
                <div>
                    <h2 className="large text-primary">Our Community</h2>
                    <p className="lead">Find The Leading Proffesionals</p>
                    <div className="profiles">
                        {profiles.length > 0 ? (
                            profiles.map((profile) => {
                                return (
                                    <ProfileItem
                                        key={profile._id}
                                        profile={profile}
                                    ></ProfileItem>
                                );
                            })
                        ) : (
                            <h4>No Profiles Found</h4>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Profiles;
