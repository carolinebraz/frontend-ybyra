import { useContext, useEffect } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import { toastAlerta } from "../../util/toastAlerta";
import { AuthContext } from "../../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import SearchBar from "../../components/Searchbar/SearchBar";
import mountains from "../../assets/images/mountains.jpg";
import orange from "../../assets/images/orange-park.jpg"
import garden from "../../assets/images/garden.jpg"
import './Feed.css'

export function Feed() {
  let navigate = useNavigate();

  const { usuario } = useContext(AuthContext);

  useEffect(() => {
    if (usuario.token === "") {
      toastAlerta("Você precisa estar logado", "info");
      navigate("/login");
    }
  }, [usuario.token]);

  const handleSearch = (query: string) => {
    // Implement your search functionality here using the 'query' parameter.
    // This is just an example.
    console.log("Searching for:", query);
  };

  return (
    <div className="flex h-screen w-screen justify-end">
      <Sidebar />
      <div className="w-4/6 mt-1 mb-1 rounded-lg bg-mint-green flex flex-col">
        <div className="h-24 p-8 flex justify-between items-center ">
          <div >
            <h1 className="fonte">Hello, {usuario.nome}! ✌️</h1>
            <p>Bem vindo de volta!</p>
          </div>
          <div className="search mt-4 flex items-center">
            <SearchBar onSearch={handleSearch} />
          </div>
        </div>

        <div className="h-2/5">
          <div className="flex items-center justify-around h-full">
            <a
              href="#"
              className="group relative flex h-72 w-52 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg "
            >
              <img
                src={mountains}
                loading="lazy"
                alt="Photo by Minh Pham"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

              <span className="relative mb-3 inline-block text-white ml-5 text-md">
                Montanha
              </span>
              <br></br>
              <span className="relative mb-3 inline-block text-white ml-5 text-md">
                Montanha
              </span>
            </a>

            <a
              href="#"
              className="group relative flex h-72 w-52 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg "
            >
              <img
                src={orange}
                loading="lazy"
                alt="Photo by Minh Pham"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

              <span className="relative mb-3 inline-block text-white ml-5 text-md">
                Montanha
              </span>
              <br></br>
              <span className="relative mb-3 inline-block text-white ml-5 text-md">
                Montanha
              </span>
            </a>
            <a
              href="#"
              className="group relative flex h-72 w-52 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg "
            >
              <img
                src={garden}
                loading="lazy"
                alt="Photo by Minh Pham"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

              <span className="relative mb-3 inline-block text-white ml-5 text-md">
                Montanha
              </span>
              <br></br>
              <span className="relative mb-3 inline-block text-white ml-5 text-md">
                Montanha
              </span>
            </a>

            <a
              href="#"
              className="group relative flex h-72 w-52 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg "
            >
              <img
                src={mountains}
                loading="lazy"
                alt="Photo by Minh Pham"
                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
              />

              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

              <span className="relative mb-3 inline-block text-white ml-5 text-md">
                Montanha
              </span>
              <br></br>
              <span className="relative mb-3 inline-block text-white ml-5 text-md">
                <svg
                  viewBox="-2.4 -2.4 28.80 28.80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                >
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke="#CCCCCC"
                    stroke-width="0.4800000000000001"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path
                      d="M21.1935 16.793C20.8437 19.2739 20.6689 20.5143 19.7717 21.2572C18.8745 22 17.5512 22 14.9046 22H9.09536C6.44881 22 5.12553 22 4.22834 21.2572C3.33115 20.5143 3.15626 19.2739 2.80648 16.793L2.38351 13.793C1.93748 10.6294 1.71447 9.04765 2.66232 8.02383C3.61017 7 5.29758 7 8.67239 7H15.3276C18.7024 7 20.3898 7 21.3377 8.02383C22.0865 8.83268 22.1045 9.98979 21.8592 12"
                      stroke="#fff"
                      stroke-width="1.7280000000000002"
                      stroke-linecap="round"
                    ></path>{" "}
                    <path
                      d="M19.5617 7C19.7904 5.69523 18.7863 4.5 17.4617 4.5H6.53788C5.21323 4.5 4.20922 5.69523 4.43784 7"
                      stroke="#fff"
                      stroke-width="1.7280000000000002"
                    ></path>{" "}
                    <path
                      d="M17.4999 4.5C17.5283 4.24092 17.5425 4.11135 17.5427 4.00435C17.545 2.98072 16.7739 2.12064 15.7561 2.01142C15.6497 2 15.5194 2 15.2588 2H8.74099C8.48035 2 8.35002 2 8.24362 2.01142C7.22584 2.12064 6.45481 2.98072 6.45704 4.00434C6.45727 4.11135 6.47146 4.2409 6.49983 4.5"
                      stroke="#fff"
                      stroke-width="1.7280000000000002"
                    ></path>{" "}
                    <circle
                      cx="16.5"
                      cy="11.5"
                      r="1.5"
                      stroke="#fff"
                      stroke-width="1.7280000000000002"
                    ></circle>{" "}
                    <path
                      d="M19.9999 20L17.1157 17.8514C16.1856 17.1586 14.8004 17.0896 13.7766 17.6851L13.5098 17.8403C12.7984 18.2542 11.8304 18.1848 11.2156 17.6758L7.37738 14.4989C6.6113 13.8648 5.38245 13.8309 4.5671 14.4214L3.24316 15.3803"
                      stroke="#fff"
                      stroke-width="1.7280000000000002"
                      stroke-linecap="round"
                    ></path>{" "}
                  </g>
                </svg>
              </span>
            </a>
          </div>
        </div>
        <div className="h-3/5 "></div>
      </div>

      <div className="w-1/6 "></div>
    </div>
  );
}
