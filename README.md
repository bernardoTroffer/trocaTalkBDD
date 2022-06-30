<!--
theme: gaia
footer: /* Behavior Driven Development */
paginate: true
-->

<!--
_class: lead
_paginate: false
-->

# BDD!

---

## Que es BDD?
Dan North: 
BDD is a second-generation, outside-in, pull-based, multiple-stakeholder, multiple-scale, high-automation, agile methodology. It describes a cycle of interactions with well-defined outputs, resulting in the delivery of working, tested software that matters. 

![bg right](https://1.bp.blogspot.com/_7rvcxWUYlQs/S4ETz6bab4I/AAAAAAAAAB4/NhLGDbqpyU4/s1600/BDD-Mindmap.png)

---

## Que no es BDD?

BDD no es E2E testing

---

## Cómo se vincula con TDD?

TDD (Test Driven Development): 
  * Visión del programador
  * Una aproximacion de bajo nivel
  * Verifica si la implemenatcion de la funcionalidad es correcta

BDD (Behavior Driven Development)
  * Visión del cliente 
  * Una aproximación desde el punto de vista del usuario 
  * Verifica si la aplicación se comporta como el usuario quiere que se comporte

![bg right](https://netmind.net/es/wp-content/uploads/2021/03/3-1.png)


---

## Cual la historia?

<dl>
<dt>2003</dt>
<dd> Dan North crea JBehave. Comenzó como un experimento para ver como podría haber sido JUnit si se hubiera concebido desde un principio como una herramienta para hacer TDD
 </dd>

<dt>2005</dt>
<dd> Algunas ideas de JBehave fueron incorporadas por Dave Astels en RSpec</dd>

<dt>2007</dt>
<dd> Dan North inspirado por el la tracción generada por RSpec crea RBehave, el cual trae como novedad la posibilidad de especificar comportamiento en texto plano, idea que luego daría origen a lo que en la actualidad se conoce como sintaxis Gherkin</dd>

<dt>2008</dt>
<dd> Reescriben completamente desde cero JBehave incorporan soporte para especificaciones en texto plano </dd>

<dt>2008</dt>
<dd> Nace Cucumber como remplozo del motor de especificaciones de RSpec. Se estandariza la sintaxis de especificacion de texto plano, y se la bautizó como Gherkin  </dd>

--- 

<!-- _class: lead -->

## Cómo aplicar BDD?

---

### Cómo aplicar BDD?

En papel...
Luego ir a codear los tests de una

![bg right](https://learnenglishteens.britishcouncil.org/sites/teens/files/rs261_157781379-low.jpg )

---
 
### Cómo aplicar BDD?

Pasar requerimientos del cliente a una especificación formal y luego automatizar los tests

![bg right](https://u-tor.com/wp-content/uploads/2020/09/test-automation-framework-2048x1260-1.jpeg)

---

### Cómo aplicar BDD?
 
Armar y mantener la especificación junto con el cliente

![bg right](https://i.pinimg.com/736x/b6/e3/0b/b6e30b7da167dd162f3d253bcada76ef.jpg)

---
 
<!-- _class: lead -->

## Cómo escribir una especificación en BDD?

---


### Cómo escribir una especificación en BDD?

Usando Gherkin:

```gherkin
Necesidad del negocio: Dar una charla de BDD

  Escenario: Se explica el formato de especificación
    Dado que se está presentando la charla
    Cuando se muestre el ejemplo de especificación
    Entonces debe entenderse claramente
    Y debe haber un chiste sobre recursión

```

---

<!-- _class: lead -->

```gherkin
Feature: Account operations

  Scenario: Extract money from account
    Given I have an account with $80
    When I extract $10 from my account
    Then I should have $70 in my account

  Scenario: Deposit money into account
    Given I have an account with $300
    When I deposit $150 into my account
    Then I should have $450 in my account

```

---

### Cómo se organiza una especificación en Gherkin?

**Feature:**
Colección de escenarios/ejemplos. Se puede pensar tanto como un caso de uso como una historia de usuario.

**Scenario / Example:**
Una serie de pasos que describen el comportamiento deseado del sistema... en otras palabras, un test.

**Step:**
Una oración que describe qué debería ocurrir.

---

### Qué debe tener cada escenario?

**Given:**
Una precondición necesaria para que se cumpla el escenario.

**Then:**
La acción a la cual le estamos definiendo el comportamiento.

**When:**
Una postcondición que debe cumplirse luego de realizar la acción.

---
 
Puntos a tener en cuenta: 
- Usar lenguaje ubicuo
- Descripciones cortas y consisas
- Reutilizar steps

---

<!-- _class: lead -->

## Cómo automatizar una especificación?

---

### Cómo automatizar una especificación?
 
- que herramientas hay?  (Cucumber, Behat, ...)
- cómo funciona?

---

## Un ejemplo de YYY con Behat ...
 
- setup del proyecto
- escribir el primer escenario
- definir un feature context
- hacer pasar el test
- escribir otro escenario
- hacer pasar el test
- profit

---

## Cosas importantes a mencionar

> En las reuniones de BDD juntar diversos roles para que...

> Si no pones distintos perfiles en la reunion no sería BDD

> Spec sirve de doc siempre y cuando esté acualizado

---

## Más material

- Specification by example

---

# TODO

- Responder las preguntas
- El código del ejemplo
- Slides con material de soporte
