import Help from "../components/home/Help"
import Hero from "../components/home/Hero"
import img1 from "../assets/home1.jpg"
import img2 from "../assets/home2.jpg"
import img3 from "../assets/home3.jpg"
import img4 from "../assets/home4.jpg"
import FlexAndEnlarge from "../reusables/FlexAndEnlarge"

const items: {
  img: string;
  heading: string;
  body: string;
  link: string;
}[] = [
  {
      img: img1,
      heading: "BUSINESS BANKING",
      body: "Our business banking is body notch and we help your business with the Paycheck Protection Program.",
      link: "/business/business-banking-solutions"
  },
  {
      img: img2,
      heading: "AUTOMATED INVESTOR",
      body: "An IRA made easy. Relax and let’s do the hard work with our Premier Sea Investments. ",
      link: "/personal/investment-solutions"
  },
  {
      img: img3,
      heading: "HOME MORTGAGE",
      body: "Find the mortgage that fits your life. Don’t worry about your mortgage We have got you covered. ",
      link: "/personal/savings"
  }, {
      img: img4,
      heading: "INSURANCE",
      body: "We can help you assess your needs and choose the policies designed to protect your assets.",
      link: ""
  },
]
const Home = () => {
  return (
<>
<Hero/>
<Help show={true}/>
<FlexAndEnlarge items={items} headingFont={"font-helvetica"} pFont={"font-helvetica"} lFont={""} />
{/* 
<svg xmlns="http://www.w3.org/2000/svg" id="Line_stroke_Ex" data-name="Line stroke Ex" width="512" height="512" viewBox="0 0 512 512"><g><path d="M24,256H48v32H64V248a8,8,0,0,0-8-8H32v-4.236l101.1-83.67-10.2-12.326-104,86.069A8,8,0,0,0,16,232v16A8,8,0,0,0,24,256Z"></path><path d="M493.1,225.837,440,181.892V88h8V72H352V88h8v27.685L261.1,33.837a8,8,0,0,0-10.2,0l-112,92.689,10.2,12.327L256,50.384l224,185.38V240H456a8,8,0,0,0-8,8v72h16V256h24a8,8,0,0,0,8-8V232A8,8,0,0,0,493.1,225.837ZM376,128.926V88h48v80.65l-17.143-14.187Z"></path><path d="M488,432H464V336H448v96H416V304a64,64,0,0,0-128,0V432H247.889a18.1,18.1,0,0,0,.111-2V402a18.027,18.027,0,0,0-16.122-17.9A18.153,18.153,0,0,0,232,382V354a18.153,18.153,0,0,0-.122-2.1A18.027,18.027,0,0,0,248,334V306a18.027,18.027,0,0,0-16.122-17.9A18.153,18.153,0,0,0,232,286V258a18.021,18.021,0,0,0-18-18H122a18.021,18.021,0,0,0-18,18v28a18.027,18.027,0,0,0,16.122,17.9A18.153,18.153,0,0,0,120,306v5.509A71.978,71.978,0,0,0,42.793,432H24a8,8,0,0,0-8,8v32a8,8,0,0,0,8,8H488a8,8,0,0,0,8-8V440A8,8,0,0,0,488,432ZM304,304a48,48,0,0,1,96,0V432H304ZM232,430a2,2,0,0,1-2,2H138a2,2,0,0,1-2-2v-.378A72.233,72.233,0,0,0,155.887,400H230a2,2,0,0,1,2,2Zm-16-76v28a2,2,0,0,1-2,2H159.558a72.21,72.21,0,0,0-3.671-32H214A2,2,0,0,1,216,354Zm-96-96a2,2,0,0,1,2-2h92a2,2,0,0,1,2,2v28a2,2,0,0,1-2,2H122a2,2,0,0,1-2-2Zm16,48a2,2,0,0,1,2-2h92a2,2,0,0,1,2,2v28a2,2,0,0,1-2,2H147.84A72.6,72.6,0,0,0,136,322.378ZM32,376a56,56,0,1,1,56,56A56.064,56.064,0,0,1,32,376Zm448,88H32V448H480Z"></path><rect x="368" y="352" width="16" height="24"></rect><path d="M256,96a56.064,56.064,0,0,0-56,56v8H184v16H328V160H312v-8A56.064,56.064,0,0,0,256,96Zm-40,56a40.068,40.068,0,0,1,32-39.2V160H216Zm48,8V112.8A40.068,40.068,0,0,1,296,152v8Z"></path><path d="M96,336H80v8.111A18.025,18.025,0,0,0,64,362v4a18.021,18.021,0,0,0,18,18H94a2,2,0,0,1,2,2v4a2,2,0,0,1-2,2H64v16H80v8H96v-8.111A18.025,18.025,0,0,0,112,390v-4a18.021,18.021,0,0,0-18-18H82a2,2,0,0,1-2-2v-4a2,2,0,0,1,2-2h30V344H96Z"></path></g></svg>
<svg xmlns="http://www.w3.org/2000/svg" id="Capa_1" height="512" viewBox="0 0 512 512" width="512"><g><path d="m503.901 344.1c-.007-.037-.015-.073-.023-.109-2.7-12.521-6.054-24.917-10.088-37.142-1.298-3.933-5.536-6.072-9.472-4.772-3.934 1.298-6.07 5.539-4.772 9.472 2.888 8.754 5.421 17.598 7.597 26.516h-35.249c-6.63 0-12.611 3.669-15.609 9.575-2.992 5.895-2.427 12.872 1.476 18.209l5.998 8.203c8.911 12.186 23.254 19.461 38.369 19.461h13.841c.68 8.851 1.03 17.739 1.03 26.654v10.93c0 18.159-12.448 33.454-29.232 37.754 2.249-6.512 3.487-13.489 3.487-20.753 0-35.219-28.71-63.871-64-63.871s-64 28.652-64 63.871c0 7.713 1.378 15.11 3.899 21.961h-22.229v-8.434c0-12.388-10.093-22.466-22.5-22.466h-45.489c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h45.489c4.136 0 7.5 3.349 7.5 7.466v8.434h-109.254v-8.434c0-4.117 3.364-7.466 7.5-7.466h13.915c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5h-13.915c-12.407 0-22.5 10.078-22.5 22.466v8.434h-21.01c2.531-6.863 3.915-14.274 3.915-22.002 0-35.218-28.71-63.871-64-63.871s-64 28.652-64 63.871c0 7.263 1.238 14.239 3.486 20.75-16.698-4.361-29.061-19.614-29.061-37.711v-24.963c0-5.136.353-10.231 1.039-15.255h16.9c11.073 0 21.418-4.929 28.381-13.523l15.35-18.947c3.059-3.775 3.66-8.844 1.569-13.229-2.093-4.39-6.417-7.118-11.285-7.118h-28.891c2.991-3.948 8.066-9.587 13.06-14.696h118.809c4.406 0 8.534-2.361 10.771-6.163 14.322-24.345 26.812-38.828 51.383-59.579l10.092-8.222c3.544-2.704 4.998-7.324 3.62-11.588-1.407-4.35-5.421-7.273-9.99-7.273h-30.543c31.119-8.964 63.486-13.572 96.244-13.572h136.479c.986 0 1.882.588 2.283 1.498l26.997 61.236c1.671 3.791 6.099 5.508 9.888 3.837 3.791-1.671 5.508-6.098 3.837-9.888l-24.991-56.685h12.913c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5c-3.679 0-28.729-.001-32.915.002v-169.5c0-12.407-10.093-22.5-22.5-22.5h-57.053c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h57.053c4.136 0 7.5 3.364 7.5 7.5v169.502h-119.492c-67.376 0-133.166 18.694-190.508 54.071v-60.998c20.603-2.735 40.499-11.981 56.296-27.779 3.699-3.699 7.03-7.628 10.013-11.732h113.542c6.893 0 12.5-5.607 12.5-12.5v-20c0-6.893-5.607-12.5-12.5-12.5h-95.723c.638-4.977.892-9.991.768-15h178.848c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5h-180.363c-.91-5.075-2.199-10.094-3.912-15h184.276c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5h-191.012c-4.899-8.699-11.651-17.82-20.359-25.564h158.137c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5h-180.432c-36.57-17.862-82.026-11.646-112.375 18.703-18.114 18.114-28.304 42.193-28.692 67.8-.063 4.142 3.244 7.55 7.385 7.613 4.109.042 7.55-3.244 7.613-7.385.329-21.687 8.959-42.08 24.3-57.421 32.362-32.361 85.018-32.361 117.38 0 32.362 32.362 32.362 85.018 0 117.38-32.362 32.361-85.018 32.361-117.38 0-8.247-8.247-14.544-17.894-18.717-28.673-1.496-3.863-5.839-5.784-9.702-4.287-3.863 1.495-5.782 5.839-4.287 9.702 4.931 12.739 12.366 24.133 22.099 33.865 18.598 18.596 42.872 28.115 67.297 28.609v70.425c-22.586 14.873-44.504 34.051-62.929 54.362-21.238 23.239-32.941 53.67-33.071 85.473v24.963c0 29.282 23.395 53.174 52.433 53.926 11.612 16.266 30.65 26.905 52.142 26.905 21.477 0 40.502-10.623 52.117-26.869h198.419c11.612 16.269 30.651 26.909 52.145 26.909 21.508 0 40.558-10.655 52.168-26.941 29.104-.677 52.576-24.6 52.576-53.931v-10.93c0-25.658-2.727-51.115-8.099-76.066zm-215.55-218.569v15h-102.097c2.341-4.866 4.273-9.88 5.765-15zm-226.654 227.531-12.032 14.851c-4.101 5.063-10.198 7.966-16.726 7.966h-13.789c2.218-7.922 5.307-15.57 9.21-22.816h33.337zm26.246-62.801c22.254-16.416 49.741-34.194 75.539-44.72h59.686l-.607.494c-.034.028-.068.056-.102.084-25.67 21.673-38.948 36.957-53.958 62.246h-101.977c6.907-6.323 14.054-12.378 21.419-18.104zm16.632 206.666c-17.634 0-33.117-9.342-41.749-23.32-.06-.096-.117-.194-.181-.288-4.485-7.377-7.07-16.024-7.07-25.263 0-26.947 21.981-48.871 49-48.871s49 21.923 49 48.871-21.982 48.871-49 48.871zm302.68.041c-27.019 0-49-21.923-49-48.871s21.981-48.871 49-48.871 49 21.923 49 48.871c0 26.947-21.981 48.871-49 48.871zm74.873-118.455c-10.348 0-20.165-4.978-26.261-13.314l-5.998-8.203c-.776-1.062-.464-2.063-.209-2.566.258-.509.893-1.364 2.233-1.364h38.546c1.664 8.43 3.022 16.916 4.053 25.448h-12.364z"></path><path d="m104.66 415.155c-18.196 0-33 14.778-33 32.942s14.804 32.941 33 32.941 33-14.777 33-32.941-14.804-32.942-33-32.942zm0 50.883c-9.925 0-18-8.048-18-17.941s8.075-17.942 18-17.942 18 8.049 18 17.942-8.075 17.941-18 17.941z"></path><path d="m407.255 415.155c-18.196 0-33 14.778-33 32.942s14.804 32.941 33 32.941 33-14.777 33-32.941-14.803-32.942-33-32.942zm0 50.883c-9.925 0-18-8.048-18-17.941s8.075-17.942 18-17.942 18 8.049 18 17.942-8.074 17.941-18 17.941z"></path><path d="m382.469 323.454h.009c8.21 0 15.225-5.581 17.059-13.573 4.516-20.397 11.48-43.113 18.761-63.286 1.127-3.824.405-7.848-1.982-11.04-2.383-3.187-6.03-5.014-10.007-5.014h-45.086c-55.442-.144-107.399 28.988-136.489 76.633-2.079 3.235-2.225 7.34-.383 10.715 1.845 3.378 5.383 5.477 9.229 5.477zm-21.246-77.913h41.561c-6.838 18.969-13.294 40.681-17.867 60.985-.26 1.135-1.263 1.928-2.438 1.928 0 0 0 0-.001 0l-17.396-.01 4.047-18.262c3.072-12.384-7.163-27.226-21.616-26.99-10.46 0-19.35 7.145-21.617 17.374l-6.172 27.85-77.845-.046c27.093-39.431 71.366-62.829 119.344-62.829zm-26.138 62.885 5.455-24.614c.733-3.309 3.601-5.62 6.972-5.62 3.374.076 7.786 3.09 6.972 8.744l-4.765 21.499z"></path><path d="m328.894 337.668c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h23.404c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5z"></path><path d="m374.745 170.531h-177.16c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h177.16c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5z"></path><path d="m374.745 140.531h-48.894c-4.142 0-7.5 3.358-7.5 7.5s3.358 7.5 7.5 7.5h48.894c4.142 0 7.5-3.358 7.5-7.5s-3.358-7.5-7.5-7.5z"></path><path d="m50.028 49.996c-8.805 8.805-8.806 23.133 0 31.939 8.12 8.043 22.557 9.246 31.939 0 8.805-8.806 8.805-23.134 0-31.939-8.245-8.436-23.162-8.735-31.939 0zm21.333 21.332c-2.957 2.958-7.77 2.958-10.726 0-2.958-2.957-2.958-7.769 0-10.726 2.368-2.184 6.792-3.434 10.726 0 2.957 2.957 2.957 7.769 0 10.726z"></path><path d="m114.025 113.993c-8.806 8.806-8.806 23.133 0 31.938 7.719 7.989 22.959 9.212 31.939 0 7.989-7.72 9.212-22.959 0-31.939-8.806-8.805-23.133-8.805-31.939.001zm21.332 21.332c-2.258 2.157-6.906 3.438-10.725 0-2.957-2.957-2.957-7.769 0-10.726 2.371-2.183 6.79-3.435 10.726 0 2.156 2.259 3.438 6.906-.001 10.726z"></path><path d="m135.006 50.355-84.618 84.618c-2.929 2.929-2.929 7.678 0 10.606 2.345 2.163 6.713 3.401 10.606 0l84.618-84.618c2.929-2.929 2.929-7.678 0-10.606-2.928-2.928-7.677-2.928-10.606 0z"></path></g></svg> 
<svg xmlns="http://www.w3.org/2000/svg" height="512" viewBox="0 0 64 64" width="512"><path d="m52.124 39.485a4 4 0 0 0 -5.792-.407l-5.926 5.433a1 1 0 0 1 -.762.259l-2.044-.177a3.946 3.946 0 0 0 -.65-2.11 4.019 4.019 0 0 0 -2.64-1.732l-8.178-1.441a20.6 20.6 0 0 0 -15.967 3.917l-7.775 5.981a1 1 0 1 0 1.22 1.584l7.774-5.98a18.582 18.582 0 0 1 14.4-3.533l8.178 1.442a2 2 0 0 1 1.6 2.424 2.115 2.115 0 0 1 -2.462 1.486l-6.68-1.178a1 1 0 0 0 -.347 1.97l6.681 1.177a4.14 4.14 0 0 0 4.375-2.042l2.341.2a2.981 2.981 0 0 0 2.287-.777l5.927-5.432a2 2 0 0 1 2.9.205 2.117 2.117 0 0 1 -.32 2.858l-8.8 8.07a4.988 4.988 0 0 1 -3.384 1.318h-13.89a16.921 16.921 0 0 0 -9.59 2.963l-6.164 4.211a1 1 0 0 0 1.128 1.652l6.165-4.212a14.94 14.94 0 0 1 8.461-2.614h13.89a6.98 6.98 0 0 0 4.73-1.84l8.8-8.069a4.09 4.09 0 0 0 .514-5.606z"></path><path d="m13 18h21a1 1 0 0 0 0-2h-20v-2h36v2h-12a1 1 0 0 0 0 2h9v16h-18v-9a3 3 0 0 0 -3-3h-4a3 3 0 0 0 -3 3v9h-2v-13a1 1 0 0 0 -2 0v14a1 1 0 0 0 1 1h32a1 1 0 0 0 1-1v-17h2a1 1 0 0 0 1-1v-4h-.007a.988.988 0 0 0 -.174-.573l-7-10a1 1 0 0 0 -.819-.427h-24a1 1 0 0 0 -.819.427l-7 10a.988.988 0 0 0 -.174.573h-.007v4a1 1 0 0 0 1 1zm8 7a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3h-1a1 1 0 0 0 0 2h1v4h-6zm28.08-13h-5.406l-3.243-8h3.048zm-7.564 0h-4.653l-1.178-8h2.588zm-7.853-8 1.179 8h-5.684l1.179-8zm-5.348 0-1.178 8h-4.653l3.243-8zm-7.794 0h3.048l-3.243 8h-5.406z"></path><path d="m44 28a1 1 0 0 0 1-1v-4a1 1 0 0 0 -1-1h-12a1 1 0 0 0 -1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 0-2h-5v-6h4v3a1 1 0 0 0 1 1zm-7 2h-4v-6h4z"></path></svg>
*/}

</>  )
}

export default Home