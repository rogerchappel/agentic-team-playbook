import { Composition } from 'remotion';
import { Intro } from './intro';

export const RemotionRoot = () => {
  return (
    <Composition
      id="Intro"
      component={Intro}
      durationInFrames={150}
      fps={30}
      width={1280}
      height={720}
    />
  );
};
