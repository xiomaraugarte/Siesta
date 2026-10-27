import ControlButtons from '@/components/ControlButtons';
import TimerRing from '@/components/TimerRing';
import { formatTime } from '@/constants/formatTime';
import { useEffect, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../components/Header';
import { colors } from '../constants/colors';
import { SECONDS_PER_MINUTE } from '../constants/timer';

export default function Index() {
  const [isRunning, setIsRunning] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(5 * SECONDS_PER_MINUTE);
  useEffect(() => {
    console.log('Effect ran');
  });
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.content}>
        <Header />
        <TimerRing progress={1} timeText={formatTime(secondsLeft)} />
        <ControlButtons
          isRunning={isRunning}
          onStart={() => setIsRunning(true)}
          onPause={() => setIsRunning(false)}
        />
        {/* COMPONENTS: add each one right above this line */}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.background },
  content: { flex: 1, padding: 20, gap: 20 },
});
