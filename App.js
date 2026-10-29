import React from 'react';
import {ScrollView, Text} from 'react-native';
import Boat from './Components/Boat';

class AllBoats extends React.Component {
    render() {
        return (
            <ScrollView>
                <Text></Text>
                <Text>GetABoat - For Sale</Text>
                <Boat
                    title={" For Sale"}
                    icon_name={"sailboat"}
                    icon_color={"grey"}
                    theme={"SEA RAY 500 SUNDANCER"}
                    info={"Contoured lines and dramatic styling reveal a refined and powerful presence that will take your breath away."}
                    poster={require('./img/sea_ray.jpg')}
                />
                <Text></Text>
                <Boat
                    icon_name={"anchor"}
                    icon_color={"black"}
                    theme={"Four Winns Horizon 180"}
                    info={"A sporty look and refined details truly set the Horizon 180 above all others."}
                    poster={require('./img/four_winns.jpg')}
                />
                <Text></Text>
                <Boat
                    icon_name={"sailboat"}
                    icon_color={"blue"}
                    theme={"Flipper 640 ST"}
                    info={"A modern take on the classic, traditional hardtop and perfect for a family picnic."}
                    poster={require('./img/flipper.jpg')}
                />
                <Text></Text>
                <Boat
                    icon_name={"sailboat"}
                    icon_color={"grey"}
                    theme={"Princess V48"}
                    info={"There is the option for an open design with a full-length cockpit and sunroof, or the enclosed deck saloon model, available with the option of a climate controlled interior."}
                    poster={require('./img/princess.jpg')}
                />
                <Text></Text>
                <Boat
                    icon_name={"sailboat"}
                    icon_color={"grey"}
                    theme={"Bayliner 175 Bowrider"}
                    info={"Its outboard power gives you increased cockpit space and quiet, fuel-efficient performance."}
                    poster={require('./img/bayliner.jpg')}
                />
                <Text></Text>
                <Boat
                    icon_name={"sailboat"}
                    icon_color={"grey"}
                    theme={"Fairline Targa 47"}
                    info={"Stretch out on the large sun bed aft while friends lounge in the generously appointed cockpit."}
                    poster={require('./img/fairline.jpg')}
                />
            </ScrollView>
        );
    };
};

export default AllBoats;