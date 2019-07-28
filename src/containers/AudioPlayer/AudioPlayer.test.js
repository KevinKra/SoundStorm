import React from "react";
import { AudioPlayer } from "./AudioPlayer";
import { shallow } from "enzyme";
import toJson from "enzyme-to-json";

const mockCurrentSong = {
  id: "1197872",
  name: "Perverting The American Dream",
  duration: 238,
  artist_id: "462184",
  artist_name: "The Bourgeois",
  artist_idstr: "The_Bourgeois",
  album_name: "The Bourgeois",
  album_id: "144113",
  position: 1,
  releasedate: "2015-02-16",
  album_image:
    "https://imgjam2.jamendo.com/albums/s144/144113/covers/1.200.jpg",
  audio:
    "https://mp3l.jamendo.com/?trackid=1197872&format=mp31&from=app-d011137e",
  audiodownload: "https://mp3d.jamendo.com/download/track/1197872/mp32/",
  shorturl: "http://jamen.do/t/1197872",
  shareurl: "http://www.jamendo.com/track/1197872",
  image: "https://imgjam2.jamendo.com/albums/s144/144113/covers/1.200.jpg",
  playing: true
};

describe("<AudioPlayer", () => {
  let wrapper;
  const props = {
    pauseSong: jest.fn(),
    playSong: jest.fn(),
    incrementIndex: jest.fn(),
    decrementIndex: jest.fn()
  };
  beforeEach(() => {
    wrapper = shallow(<AudioPlayer currentSong={mockCurrentSong} {...props} />);
  });
  it("should match the snapshot", () => {
    console.log(wrapper.debug());
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  xit("should pause a song when the pause button is pressed", () => {
    wrapper.find("i.fa-pause-circle").simulate("click");
  });
  // it("should play a song when the play button is pressed", () => {
  //   wrapper.find("i.fa-play-circle").simulate("click");
  // });
  // it("should iterate to a new song when nextSong is invoked", () => {
  //   wrapper.find("i.fa-step-forward").simulate("click");
  // });
  // it("should iterate to a previous song when prevSong is invoked", () => {
  //   wrapper.find("i.fa-step-backward").simulate("click");
  // });
});
