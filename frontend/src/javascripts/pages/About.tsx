import * as React from 'react';
import { BackGround } from '../pages/BackGround';

// interface about {
//   hoge: string,
//   huga: string,
// }

// export const About: React.FC<about> = (props) => {
export const About = (props: any) => {
  return (
    <React.Fragment>
      <div className="relative">
        <BackGround />
        <div className="About absolute z-10 top-0 left-0">
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img
              className="w-full"
              src="https://source.unsplash.com/random/1600x900/"
              alt="Sunset in the mountains"
            ></img>
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
              <p className="text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!
                Maiores et perferendis eaque, exercitationem praesentium nihil.
          </p>
            </div>
            <div className="px-6 py-4">
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                #photography
          </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
                #travel
          </span>
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                #winter
          </span>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

