import "babel-polyfill";
import _ from "lodash";

import "./../sass/styles.scss";

// получение каждого Item
import Db from "../db/db.json";

import importPhoto from "./importPhoto";

const getItems = () => {
  const images = importPhoto(
    require.context("../image/", false, /\.(png|jpe?g|svg)$/)
    );
    let img = "";
    let itemBackground = "";
  // element.classList.add("item");
  Db.myItems.forEach(item => {
    img = item.img;
    itemBackground = item.background;
    const element = document.createElement("section");
    element.innerHTML = `
    <div class="item" style="background:${itemBackground}; color: ${item.color};">
    <div class="col-large item_wrap">
    <img class="item_wrap_image" src=${images[img]}/>
    
    </div>
    <div class="col-small item_wrap">
    <h2>${item.title}</h2>
    <p>${item.desc1}</p>
    <ul class="item_wrap_list">
    <li>${item.desc2}</li>
    <li>${item.desc3}</li>
    <li>${item.desc4}</li>
    </ul>
    <a style="color:${item.color}" href="${item.url}" class="item_wrap_list_url">Перейти на сайт</a>
    <div class="item_wrap_list_url_line"></div>
    </div>
    </div>
    `;
    document.body.append(element);
  });
};
getItems();


