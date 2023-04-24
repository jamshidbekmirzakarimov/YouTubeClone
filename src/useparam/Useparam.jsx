import { Link, useParams } from "react-router-dom";
import { MyContext } from "../context/Context";
import { useContext } from "react";
import NoteFound from "../noteFount";
import "./useparam.scss";
const Useparam = () => {
  const { title } = useParams();
  const { data } = useContext(MyContext);
  const item = data.filter((Element) => Element.video.author.title === title);
  return (
    <>
      {item.length > 0 ? (
        <div className="lg:flex lg:justify-between">
          <div className="">
            {data
              .filter((Element) => Element.video.author.title === title)
              .slice(0, 1)
              .map((i, el) => (
                <div
                  style={{ }}
                  key={el}
                  className="fixed flex justify-center bg-white   lg:start-96 top-50"
                >
                  <div className="iframeBox"
                  >
                    <iframe
                      className="rounded positish"
                      src={`https://www.youtube.com/embed/${i.video.videoId}`}
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    ></iframe>
                    <h2 className="hidden sm:block text-start text-xl font-semibold">
                      {i.video.title}
                    </h2>
                    <div className="flex items-center ">
                      <div className="useparBoxImg">
                      <img
                        className="useparCanalImg"
                        src={i.video.thumbnails[0].url}
                        alt="img"
                      />
                        </div>
                      <div className="pe-10">
                        <Link className="sm:text-start text-slate-500 text-xl">
                          {i.video.author.title}
                        </Link>
                        <p className="block text-slate-400">
                          95,7 тыс. подписчиков
                        </p>
                      </div>
                      <button className="btn text-white bg-red-600 px-3 py-1 rounded">
                        подписаться
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <div className="pt-5">
            {data.slice(16, 90).map((i, el) => (
              <div key={el} className="pb-10 flex justify-center">
                <div className="">
                  <Link to={`/${i?.video.author.title}`} className={``}>
                    <img
                      className=" rasm block"
                      src={i.video.thumbnails[0].url}
                      alt="img"
                    />
                  </Link>
                  <div className="flex items-center pt-3">
                    <img
                      className="bord block"
                      src={i.video.thumbnails[0].url}
                      width="35px"
                      height="45px"
                      alt="img"
                    />
                    <Link>{i.video.author.title}</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <NoteFound />
      )}
    </>
  );
};

export default Useparam;
