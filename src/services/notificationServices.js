import notifee, { AndroidBadgeIconType, AndroidImportance } from '@notifee/react-native';

export async function createChannel({ channel }) {
    const channelId = await notifee.createChannel({
        id: channel.id,
        name: channel.name,
        vibration: channel.vibration,
        importance: channel.importance === 'high' ? AndroidImportance.HIGH :
            channel.importance === 'low' ? AndroidImportance.LOW :
                channel.importance === 'default' ? AndroidImportance.DEFAULT :
                    channel.importance === 'min' ? AndroidImportance.MIN :
                        AndroidImportance.NONE
    });

    return channelId
}

export async function onDisplayNotification(notification) {
    await notifee.requestPermission();

    const channelId = await createChannel({ channel: notification.channel });
    await notifee.displayNotification({
        id: notification.id,
        title: notification.title,
        body: notification.body,
        android: {
            channelId,
            largeIcon: require('../../assets/favicon.png'),
            badgeIconType: AndroidBadgeIconType.SMALL,
            groupSummary: true,
            pressAction: notification.press,
        },
    });
}