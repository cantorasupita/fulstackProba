demo --   https://react-pizza-v2.vercel.app/

//1-5
===========================================================
ctrl + d    - для выдиления всех 
npm i sass 
fonts Nonina -  загружени из google fonts, вставить в index.html
js - jsx - чтобы не ругался валидатор редактора кода
React.Fragment <></> не оставляэт  род компон
key --- для статики i, Math.Random() -- ето плохо
useState - нужен когда дание меняются
условний рендеринг {value && <div></div>}


//6-8
======================================================
backend mockapi
https://mockapi.io/projects/6331674a3ea4956cfb5cd951
https://6331674a3ea4956cfb5cd950.mockapi.io/items
useEffect
loader
React Skeleton
React Router v6
    <a / > - nu trebuie de folosit, face Reload
css модули







//9 локал стайт, сортировка, фильтр
=================================================================
сортировка 
    ?sortBy=category&order=desc  - категории < creshendo
    ?sortBy=category&order=asc - категории > diminuendo

поиск -- найди все товари где есть слово Пепперони
    ?search=Пепперони

фильтр -- например!!!  дай мне все товари где  category=2
    ?category=2

пагинация 
   ?page=1&limit=10

Все в перемешку    
    ?page=2&?sortBy=category&limit=2&order=asc


10 search
================================================
контролируемый input

prop-drilling --  передавать до 3 дочернего елемента, а дальше через глобал стайт

poisc - и на стороне серверва и на стороне клиента(на сфронтенде есссссссли масив статичний и не много данних)

Pagination - npm i react-pagination



11 useContext() 
==========================================================================




12 - 14 Redux Toolkit
============================================================================
slices - astai obertca deasuppra la Reducer
sort, filt - через Redux

npm i axios

Оптимизируем поиск с помощью Debounce (отложеная функция)
    useCallback - сохраняет силку на обект(func) после перерисовки компонента
    npm i lodash.debounce
    lodash ---- полезная штука сайт

pagination через Redux





15 Сохраняем параметры фильтрации в URL
================================================================
npm i qs   --- для парсинга
    bagam in URl parametri(filtr, pagination, poisc? sortirovca)


16 корзіна
=============================================



17 async await, promis
================================================
отлов ошибок для async await через try catch
createAsyncThunk(param, ThunkApi) 
ThunkApi - obj cu danie (state, dispatch ....)




19 selector
================================================


20 аналог window.location
================================================
useParams, useLocation, Layout, Outlet(vlojenosti pentru a lucra corect), useNavigate('/') - переход





21 Typescipt
=================================================================
sait create-react-app
tsconfig

React.FC - function component
    ?. - оператор обцеональной последовательности, daca este asha ceva indeplineshte, daca nui nu fa
    () =>  void ----- nimic nu intoarce
    any - ori shi ce tip
    tipizatsia la component  -- React.FC
    tipizatsia la props ---   React.FC<typeName>
    tipizatsia la clic  --   e: React.ChangeEvent<HTMLInputElement>



25 rendering
=====================================================
ahooks
