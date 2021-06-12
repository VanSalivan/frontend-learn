import { withDataHOC } from "../hoc-helpers";
import ItemList from '../item-list';
import SwapiService from "../../services/swapi-service";

const swapiService = new SwapiService()

// Создаем компоненты через обертку HOC = withНазвание(передаваемыйКомпонент, параметр-Данные)
const PersonList = withDataHOC(ItemList, swapiService.getAllPerson);
const PlanetList = withDataHOC(ItemList, swapiService.getAllPlanets);
const StarshipList = withDataHOC(ItemList, swapiService.getAllStarships);

export { PersonList, PlanetList, StarshipList };