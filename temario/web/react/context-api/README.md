# Context API

{% embed url="https://docs.google.com/presentation/d/1fzqsvXNqBp117fXcyZPF4IVspu3JgglJDwijOKFLjwU/edit#slide=id.g1dd2602ce54_0_0" %}

{% embed url="https://www.youtube.com/live/yiVNn0yB4mg?si=DomIg3nvfYZZbMId" %}

### Prop Drilling



Es el proceso de pasar los Props hacia abajo en el árbol de componentes, de un componente a otro en múltiples niveles.

```jsx
<App>
	<Post>
		<Categories />
		<Comments>
			<Comment>
				…
			</Comment>
		</Comments>
	</Post>
</App>
```

## Context API

\
Es usado para compartir la data entre los componentes de React.&#x20;

Provee una forma para pasar la data a través de los componentes del árbol, sin  pasar manualmente los props (Prop Drill).

Para usarlo necesitamos 3 elementos

* createContext
* Provider
* Consumer

### ¿Cómo utilizamos Context?

* createContext

Crea el contexto

```jsx
const ThemeContext = createContext(‘light’)
```

* Provider

Es el encargado de decidir qué dato transmitir. Debemos usarlo en el componente que tiene el dato a distribuir.

```jsx
<ThemeContext.Provider value={user}>
	<App>
    <Child>
    </Child>
	</App>
</ThemeContext.Provider>
```



* Consumer

El encargado de obtener el dato que está siendo transmitido por el Provider (alternativamente podemos utilizar el hook useContext). Debemos usarlo en el componente que quiere leer el dato.

```jsx
const theme = useContext(ThemeContext);
```

### Provider Hell



```jsx
<AppState_1_Provider>
<AppState_2_Provider>
    	<div className="container">
       		{children}
    	</div>
</AppState_2_Provider>
</AppState_1_Provider>

```



\
\
