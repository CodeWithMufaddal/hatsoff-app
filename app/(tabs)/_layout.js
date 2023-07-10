

import { Link } from 'expo-router';
import { Tabs } from 'expo-router/tabs';

const TabLayout = () => {
    return (
        <Tabs>
            <Tabs.Screen
                // Name of the dynamic route.
                name="Home"
                // options={{
                //     // Ensure the tab always links to the same href.
                //     href: '/evanbacon',
                //     // OR you can use the Href object:
                //     // href: {
                //     //   pathname: '/[user]',
                //     //   params: {
                //     //     user: 'evanbacon',
                //     //   },
                //     // },
                // }}
            />
        </Tabs>
    )
}


export default TabLayout;