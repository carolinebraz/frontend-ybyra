const membros = [
    {
        id: 1,
        nome: 'Camila Ramos',
        cargo: 'Desenvolvedora Full Stack',
        foto: 'https://avatars.githubusercontent.com/u/133241614?v=4',
        redesSociais: {
            github: 'https://github.com/kmikazze',
            linkedin: 'https://www.linkedin.com/in/camila-ramos-511481280/',
        },
    },
    {
        id: 2,
        nome: 'Caroline Braz',
        cargo: 'Desenvolvedora Full Stack',
        foto: 'https://avatars.githubusercontent.com/u/77181937?v=4',
        redesSociais: {
            github: 'https://github.com/carolinebraz',
            linkedin: 'https://www.linkedin.com/in/carolinebraz/',
        },
    },
    {
        id: 3,
        nome: 'Elise Marie',
        cargo: 'Desenvolvedora Full Stack',
        foto: 'https://avatars.githubusercontent.com/u/113945437?v=4',
        redesSociais: {
            github: 'https://github.com/eliseflaneuse',
            linkedin: 'https://www.linkedin.com/in/elise-flaneuse/',
        },
    },
    {
        id: 4,
        nome: 'Leandro Andrade',
        cargo: 'Desenvolvedor Full Stack',
        foto: 'https://avatars.githubusercontent.com/u/105620405?v=4',
        redesSociais: {
            github: 'https://github.com/leands0',
            linkedin: 'https://www.linkedin.com/in/leands0/',
        },
    },
];

const Equipe = () => {
    return (
        <>
            <div className="bg-mint-green">
                <h1 className="flex justify-center text-4xl font-bold py-4">Time de desenvolvimento</h1>
                <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4">
                    {membros.map((membro) => (
                        <div key={membro.id} className="bg-white border rounded-xl p-4 m-8 mt-[75px] shadow">
                            <img src={membro.foto} alt={membro.nome} className="w-32 h-32 rounded-full mx-auto -mt-[75px]" />
                            <h2 className="text-lg font-semibold text-center mt-2">{membro.nome}</h2>
                            <p className="text-center">{membro.cargo}</p>
                            <div className="flex justify-center">
                                <a href={membro.redesSociais?.github} target="_blank" className="p-2">
                                    <svg height="1.75em" viewBox="-2.4 -2.4 28.80 28.80" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000" stroke="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0" transform="translate(0,0), scale(1)"><rect x="-2.4" y="-2.4" width="28.80" height="28.80" rx="14.4" fill="#D0F9EB"></rect></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#FCCE38" stroke-width="0.384"></g><g id="SVGRepo_iconCarrier"> <title>github</title> <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g id="Logo" transform="translate(-144.000000, -144.000000)" fill-rule="nonzero"> <g id="github" transform="translate(144.000000, 144.000000)"> <path d="M24,0 L24,24 L0,24 L0,0 L24,0 Z M12.5934901,23.257841 L12.5819402,23.2595131 L12.5108777,23.2950439 L12.4918791,23.2987469 L12.4918791,23.2987469 L12.4767152,23.2950439 L12.4056548,23.2595131 C12.3958229,23.2563662 12.3870493,23.2590235 12.3821421,23.2649074 L12.3780323,23.275831 L12.360941,23.7031097 L12.3658947,23.7234994 L12.3769048,23.7357139 L12.4804777,23.8096931 L12.4953491,23.8136134 L12.4953491,23.8136134 L12.5071152,23.8096931 L12.6106902,23.7357139 L12.6232938,23.7196733 L12.6232938,23.7196733 L12.6266527,23.7031097 L12.609561,23.275831 C12.6075724,23.2657013 12.6010112,23.2592993 12.5934901,23.257841 L12.5934901,23.257841 Z M12.8583906,23.1452862 L12.8445485,23.1473072 L12.6598443,23.2396597 L12.6498822,23.2499052 L12.6498822,23.2499052 L12.6471943,23.2611114 L12.6650943,23.6906389 L12.6699349,23.7034178 L12.6699349,23.7034178 L12.678386,23.7104931 L12.8793402,23.8032389 C12.8914285,23.8068999 12.9022333,23.8029875 12.9078286,23.7952264 L12.9118235,23.7811639 L12.8776777,23.1665331 C12.8752882,23.1545897 12.8674102,23.1470016 12.8583906,23.1452862 L12.8583906,23.1452862 Z M12.1430473,23.1473072 C12.1332178,23.1423925 12.1221763,23.1452606 12.1156365,23.1525954 L12.1099173,23.1665331 L12.0757714,23.7811639 C12.0751323,23.7926639 12.0828099,23.8018602 12.0926481,23.8045676 L12.108256,23.8032389 L12.3092106,23.7104931 L12.3186497,23.7024347 L12.3186497,23.7024347 L12.3225043,23.6906389 L12.340401,23.2611114 L12.337245,23.2485176 L12.337245,23.2485176 L12.3277531,23.2396597 L12.1430473,23.1473072 Z" id="MingCute" fill-rule="nonzero"> </path> <path d="M7.0236,2.31058 C7.64222,2.52096 8.40745,2.85626 9.14865,3.35611 C10.0469,3.12454 11.0061,3 12.0001,3 C12.993,3 13.9513,3.12429 14.8488,3.35541 C15.5898,2.85581 16.3549,2.52068 16.9733,2.31041 C17.6702,2.07347 18.6635,1.68873 19.2532,2.34204 C19.6536,2.78558 19.7529,3.52998 19.8243,4.09751 C19.9041,4.7317 19.9227,5.55836 19.7128,6.37797 C20.5157,7.41477 21.0001,8.65244 21.0001,10 C21.0001,12.0422 19.894,13.8148 18.2569,15.0426 C17.5034,15.6077 16.6274,16.0673 15.6667,16.3988 C15.8811,16.8891 16.0001,17.4307 16.0001,18 L16.0001,21 C16.0001,21.5523 15.5523,22 15.0001,22 L9.00005,22 C8.44777,22 8.00005,21.5523 8.00005,21 L8.00005,20.0087 C7.04473,20.1257 6.24413,20.0222 5.5626,19.7331 C4.85081,19.4311 4.35469,18.9627 3.98181,18.5152 C3.62811,18.0908 3.2425,17.1349 2.6838,16.9487 C2.15986,16.774 1.8767,16.2077 2.05134,15.6838 C2.22599,15.1598 2.79231,14.8767 3.31625,15.0513 C3.98203,15.2732 4.41554,15.7534 4.71319,16.1386 C5.19225,16.7585 5.58364,17.5695 6.3437,17.8919 C6.65626,18.0245 7.11546,18.1125 7.8323,18.0137 L8.0001,17.9802 C8.00283,17.4181 8.12149,16.8834 8.33341,16.3988 C7.37273,16.0673 6.49666,15.6077 5.7432,15.0426 C4.10606,13.8148 3.00005,12.0422 3.00005,10 C3.00005,8.65402 3.48329,7.41765 4.28448,6.38159 C4.07379,5.56134 4.09217,4.73379 4.17192,4.09897 C4.17352,4.08622 4.17512,4.07342 4.17673,4.06057 C4.24961,3.47909 4.33549,2.79383 4.74307,2.34215 C5.33266,1.6888 6.32676,2.07361 7.0236,2.31058 Z" fill="#F18245"> </path> </g> </g> </g> </g></svg>
                                </a>
                                <a href={membro.redesSociais?.linkedin} target="_blank" className="p-2">
                                    <svg height="1.75em" viewBox="-6.6 -6.6 33.20 33.20" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0" transform="translate(0,0), scale(1)"><rect x="-6.6" y="-6.6" width="33.20" height="33.20" rx="16.6" fill="#D0F9EB"></rect></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>linkedin</title> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"> <g transform="translate(-180.000000, -7479.000000)" fill="#F18245"> <g id="icons" transform="translate(56.000000, 160.000000)"> <path d="M144,7339 L140,7339 L140,7332.001 C140,7330.081 139.153,7329.01 137.634,7329.01 C135.981,7329.01 135,7330.126 135,7332.001 L135,7339 L131,7339 L131,7326 L135,7326 L135,7327.462 C135,7327.462 136.255,7325.26 139.083,7325.26 C141.912,7325.26 144,7326.986 144,7330.558 L144,7339 L144,7339 Z M126.442,7323.921 C125.093,7323.921 124,7322.819 124,7321.46 C124,7320.102 125.093,7319 126.442,7319 C127.79,7319 128.883,7320.102 128.883,7321.46 C128.884,7322.819 127.79,7323.921 126.442,7323.921 L126.442,7323.921 Z M124,7339 L129,7339 L129,7326 L124,7326 L124,7339 Z" id="linkedin-[#F18245]"> </path> </g> </g> </g> </g></svg>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Equipe;
