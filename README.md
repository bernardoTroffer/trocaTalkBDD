<!--
theme: gaia
footer: /* Behavior Driven Development */
paginate: true
backgroundColor: white
-->

<!--
_class: lead invert
_paginate: false
_backgroundColor: #D76B00
-->

# BDD!

---

<!-- _class: lead invert
_backgroundColor: #D76B00 -->

## Qué es BDD?

---
<!-- _header: "Qué es BDD?" -->

BDD es una metodología ágil de segunda generación, outside-in, pull-based, multiple-stakeholder, de múltiples escalas, de alta automatización. Describe un ciclo de interacciones con resultados bien definidos, lo que da como resultado la entrega de un software funcional y probado

---
<!-- _header: "Qué es BDD?" -->

![bg width:1200px](https://1.bp.blogspot.com/_7rvcxWUYlQs/S4ETz6bab4I/AAAAAAAAAB4/NhLGDbqpyU4/s1600/BDD-Mindmap.png)

---


<!-- _class: lead invert
_backgroundColor: #D76B00 -->

## Cual la historia?

---

2003
* Dan North crea JBehave

2005
* Se inicia el desarrollo de RSpec incorporando las ideas de JBehave

2007
* Dan North crea RBehave, el cual trae como novedad la posibilidad de especificar comportamiento en texto plano
----

2008
* Nace Cucumber como remplazo del motor de especificaciones de RSpec. Se crea Gherkin

---

<!-- _class: lead invert
_backgroundColor: #D76B00 -->

## Cómo se vincula con TDD?

---

![bg width:750px](https://netmind.net/es/wp-content/uploads/2021/03/3-1.png)

---

<!-- _header: "Cómo se vincula con TDD?" -->

| TDD | BDD |
|--------|--------|
| Visión del programador | Visión del cliente  |
| Una aproximacion de bajo nivel   | Una aproximación desde el punto de vista del usuario     |
| Verifica si la implemenatcion de la funcionalidad es correcta    | Verifica si la aplicación se comporta como el usuario quiere que se comporte  |


--- 

<!-- _class: lead invert
_backgroundColor: #D76B00 -->


## Cómo aplicar BDD?

---

### Cómo aplicar BDD?

En papel...
Luego ir a codear los tests y ya

BDD es un proceso,
no una herramienta

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
 
<!-- _class: lead invert
_backgroundColor: #D76B00 -->

## Cómo escribir una especificación en BDD?

---


### Cómo escribir una especificación en BDD?

Usando Gherkin:

```gherkin
Necesidad del negocio: Dar una charla de BDD

  Escenario: Se explica el formato de especificación de manera clara
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

<!-- _class: lead -->

Gauge

```markdown
Find movies playing near me
===========================

The System Under Test in this example is a web 
application to find and book movie tickets

Search for movies
-----------------

* Specify location as "Bangalore"
* Search for movie "Star Wars"
* Verify that "INOX" is playing "Star Wars" at "7:30pm"

```

---

<!-- _class: lead -->

Fit: Framework for Integrated Test

![](http://fit.c2.com/files/WelcomeVisitors/example.gif)

---

<!-- _class: lead -->

Concordion

![](https://concordion.org/img/main-example-output.png)

```markdown
The full name [Jane Smith](- "#name") is [broken](- "#result = split(#name)") 
into first name [Jane](- "?=#result.firstName") and last name [Smith](- "?=#result.lastName").
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
- Usar lenguaje ~~ubicuo~~ fácil de entender
- Descripciones lo más cortas posibles. Que sean realmente consisas y que vayan al punto del asunto, sin dar vueltas. Tienen que entrar en un renglón.
- Mantenga persona y tiempo verbal
- Reutilizar steps
- Reutilizar steps

---

<!-- _class: lead invert
_backgroundColor: #D76B00 -->

## Cómo testear una especificación?

---

<!-- _class: lead invert
_backgroundColor: #D76B00 -->

## Cómo ~~testear~~ automatizar una especificación?

---

### Cómo automatizar una especificación?


Mantra:

- El test es la especificación

- La especificación es el test

- El resto es código plasticola

![bg right](https://pbs.twimg.com/media/E9u5F7OXIAkmXzN?format=jpg&name=4096x4096)

---

### Cómo automatizar una especificación?
 
Depende del tipo de especificación:

- Gherkin: con Cucumber, Behat, SpecFlow, etc...
- Gauge
- Fit
- Concordión

---

### Cómo automatizar una especificación?

Para Gherkin:

- El step es la únidad ejecutable
- Alcanza con implementar cada step
- Escribir una funcion que matchee con el step

---

<!-- _class: lead
_header: "Cómo automatizar una especificación?" -->

![bg](https://media-exp1.licdn.com/dms/image/C5612AQG85ZZKxjFiGQ/article-inline_image-shrink_1500_2232/0/1598878657949?e=1659571200&v=beta&t=yXqt29NKWxkdj6mEwKSdqEs1x9ITsL58uIrhXuu2QLU)

---

<!-- _class: lead
_header: "Cómo automatizar una especificación?" -->


![bg](https://media-exp1.licdn.com/dms/image/C5612AQG85ZZKxjFiGQ/article-inline_image-shrink_1500_2232/0/1598878657949?e=1659571200&v=beta&t=yXqt29NKWxkdj6mEwKSdqEs1x9ITsL58uIrhXuu2QLU)
![w:750 opacity:.5](https://www.nicepng.com/png/full/14-145192_red-circle-with-line-png-clipart-library-library.png)

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>

---

### Cómo automatizar una especificación?

```gherkin
Feature: Greeting
  Scenario: Say hello
    When the greeter says hello
    Then I should have heard "hello"
```

```javascript
When('the greeter says hello', function () {
  this.whatIHeard = new Greeter().sayHello();
});

Then('I should have heard {string}', function (expectedResponse) {
  assert.equal(this.whatIHeard, expectedResponse);
});
```

---

### Cómo automatizar una especificación?

```gherkin
Feature: Greeting
  Scenario: Say hello
    When the greeter says hello
    Then I should have heard "hello"
```

```php
/**
 * @When the greeter says hello
 */
function theGreeterSaysHello() {
  this->whatIHeard = (new Greeter())->sayHello();
}
```

---

### Cómo automatizar una especificación?

- Reutilizar steps es clave
- Parametrizar con criterio

Aunque no parezca, estamos escribiendo nuestro propio DSL para especificar el comportamiento del sistema

![bg right](https://i.pinimg.com/474x/85/fb/b4/85fbb425a8e15af17710454463690354.jpg)

---

<!-- _class: lead invert
_backgroundColor: #D76B00 -->

## Un ejemplo

---

## Un ejemplo
 
- Setup del proyecto
- Escribir el primer escenario
- Definir los steps
- Hacer pasar el test
- Escribir otro escenario
- Definir los steps
- Hacer pasar el test...

![bg right](data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFBcVFRUYGBcaHBsbGhobGxsbGxsaHh0dIRsaHRsbISwkHSIpIB0bJTYmKS4wMzMzGyI5PjkyPSwyMzABCwsLEA4QHhISHTgpIio8MjI5MjQzMjI4PTMwODs7MDUyMjQ0MjI0MjIyOzIyMjIyMjMyMjIyOzI0MjQyMjIyMv/AABEIAOEA4QMBIgACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAAAAQIFAwQGB//EAEcQAAEDAQQGCQEFBAgGAwEAAAEAAhEDBBIhMQVBUWGB8AYTInGRobHB0TIHFEJS4SNicvEVM0NTgpKys1Rjk6LC0kRzgxb/xAAbAQEAAgMBAQAAAAAAAAAAAAAAAwQBAgUGB//EAC4RAAICAQMDAgMJAQEAAAAAAAABAgMRBCExBRJBE4EyUXEGFCJhkaGxwfDRI//aAAwDAQACEQMRAD8A9dPymD77NqX6pA++7BAMDdzKfyotz/mpR784IB48ylj/AClHDn2QQgFHvt2hHDZ7IcMUeGfugGBzigICEA+daDPMpQta0W6lTIFSrTpkjAOe1p1bSJQGwfY7UXc/1SDgRIxBEgiCIzWppLSVKg2/VqBgJgSCSThkG4nBAbh5yOtMBVejdPWe0EtpVA5wxLSHNMbQHRPDatu31rlKo8EAtY9wOGbWkzkgNgJ8+a5/ohpKpVspq16gJDndohrRdEZwAFcWa3Uqs9XVp1Imbj2ujvunuQGwZSPdzuTI58FqW3SNKj/WVGMvZBxAJ7hsQG1GeCXOorDZbXTqAupVGPE5tII1YYHBZ537daAZHP68UDuylE+/qjjq3bkABJ0pkIIz51c+CATteCN+/wCdqZPruSacsdR9kARz2UKMfvDxPyhASGqfdDchx5z3oPOCQ+QgGDvMJn5SaefFS/VAJI+GC1NKaSp2em6pUMNGGGJcTMBo1n4KyWK206tMPpuDmnIj0I1HPAoDM4A69y1bfpCnRbfqPDGl0TjmRMQ0HHM8Fy+ndJ2h9Sq1tX7tQpYGoQZqOjJrszuDce/VqWK3PttirUKhLq1MX2k/U4N7Q4yC07nDagLOt02pseB1VQ0r13rcLpIzLRHaAx1zCXSbSdbraNloPuOqC85+uCSAGnV9LjIxyyxWpY6YtWiSxol9MGAM7zDeEDaW4f4kU9EVbTZrPWYTStFEXRfBF5rT2ZkTsI1YkIBi02ixWmlTq13VqVbDtSS0yAYJJOBLdcEE4Ksteia1OtW6yyi0h7ib4cbwBJg9ky0xtGrBXtDQVqrV6da2uZFPFjKeROc+IB4BbNs6J03VH1KdWrRNQy8U3QHE4nu1nYgH0Mt1OpQLKbHU+rJaWOcXQTjg44xnhAjFafTG1MbVoUxRpvquMsfUJDGSWiDETJjwC6DQ+iaVmZ1dMGCZJJkuMZk8EtK6Io2loFZgcGyQZIIymCDkYy7kBxmi77dKM6x9Jz7pvdWA1gN09nDWMJXY9IHRZK5/5VTZraQoWXo9ZqbmPp0g1zJuuBdOvPHHPWt612ZtSm6m8S1zSHAEjAxrCA4Cz2ikzRtKlVpvqGrUfcYx1yS12ZOwEjUcSMFrus7qdssoFn+7OJbgKl8ubMEnKMLw34rs7Z0YoPotow5rWSWODu00mScTnPsNi1aPRJjKtOt1tV72GSXuvF2wScRAKA6Oq66CSBAEnuAxXn/RnRot1SrabRLhegNnCYkDuaIAC9BqNDgWnI4EbjyVwdhdaNGOqU3UXVqLnXmvZMjwBgwBIMZYICOl7K2w2uz1LOS1tQ3XskkEAskY6iH5aiFe9INPuo1qNGkwPfUMuBJHYOAgjIkyZxwaVRWelWttqbaa1M0qFIXgHSMG9rMgSScSYGACxaJsLtIWitaTUfTaHQwsMPAya0HVDYneSgPRCOee9HJXJ9DNJ1H9fTqVDUbSdDajjm2XDFx/hmTtXRWC3067OspPD2yRInAjUQcvDWgNqEj3Jn3QOc9iAXz7JN53qQPOKTcuG9ARu7vVCdx2weP6IQA0JtGHPOtB7uZSBy2x8IBjv5xUa1VrGuc511rQS4nIAZnHZCkO5a+kbCytTdTeJa4QYJBmQQZGwgFAc5pOrZtJUblKqOtbLmB0tde2FpGIOWExguX0I+vRL6lCb9PCvZzOIGF8DWNWGLTtBRpbo+bI/wDatdUoE9mqzB7DqkZTuOB1EFbdj0NaetpWmzVhWaSBfmHBuRbUa7E4YESThqhAbOk7TUtpo2iz0zVFMw+i78L851BwIwkbBgrXQ+gKhrffKr+rqOcSWMi7dIADSdYgY8F0tGzsZNxjW3nXjdESTmTGayYeZ2/z1IDW0do6lRbdpMDATJAnE7+dS2C6BJO/Wp6uCw2sdk9xQFbV0s+exSquH5gMMyDnsI8lj/par/cVvBvytUS+nZ2XnNDqj2uuuLCWg1cLzcRiAcNgVM++CYq1cz/aP+VvCDnwRzn28nR/0pW1Wer4s93Jf0nW/wCHq/8AacODlzhL/wC9q/8AUd8pOBObnHvh3qFJ92ka+sjpv6Uqf3FX/L+qBpSrh+wqeA/9ly1yMnOHcY9AoOe8ZVav+crH3eRn1UdlZNK3nBr2PYTMXmkTtg5cFaB2/UuNe2pVp0Lr4eDUMuJxDSW4mDjBC2WWa2mCyrSDCJF5ry4g5TBAGGrFQ4fg3Ul5OqJ3o52alzzRbRn1Lv8AHUb/AOBVpo21io0nWHOacPxNJa7zBCGU0+DNabM2o1zHiWuBa4SRLSBIwxXLWnotVpyLHWNJj2w9jpO68HYkGO7vXXA7turu+PJBHp5IZPObdZXUg3R1nl1SpDq1SCJByaP3Yz8NZXQaP6KsszqdVtaoLjXF4GLX4Y4DVnh3a10ppNLrxALgCAYEwTjG5eb121GVrTVq2h1Kuxxcxr5uVGSYaB+JpGAAywQHoOj9I0q7b9KoHtmDGYOGBBxHFbRK4HojaestrqlGiaVJzAHtH0B4jERgMchvO1d9z5IAIPmoDLx58lIAchDchz5oCN07/L5Ql/h8h/6oQEp9kAYcN+5P4S5yBjcgGOcd3knKEQgIVabXAtc0FpEEHEEEHDeq/ROhaVm6zqwQHukgmYjICdXyrMpHn4QCcfX2Tn32JmfP53JR785dyAOdW5YbSew7uWf9dSxWr6T3HnzQFBY//if/AGVf9VRU9oHbd/E71KurG6TYz/zKw/3R7KlrmXuP7x9VZ0vL9iC7hGNCEK6VhFYXLMVhec1qzZFxov6KX8Nb/Wk3Sj2ks6xoDQwAB1DAGnTPaD6gcDJOYGEd6y2L6afdV/1LPQscgFjD9LLx+8VqfauN/AwXfpu4rm4fgsZXk12aWqfhcHnU29ZxeOpoIq4TlrzVh0a/tZ/vq3+49YatjF0321LsGSLRVdAjHMg5LN0cyqYf2tXu/rHrEs+TeGPBct79W5SM+nOSO/2RA54bVg3G458NiqNL9H6VpfSqVCTckXQcHTGfEeauDzkkdaAx2egym0NY1rWjIAACJWQHeOeKEHu9MUAhzkk3Lhu3JjnySA9PjAwgJSdvkhHOtCAiTniMvlMnHiEueOOKfygJAc+CCNyw17Qym01Kj2sY2S57iGtaBrJOAU2EEAg4RIxwIIzB8EBjo2ljzUaxwJYbjwM2uLQ4AjV2XNPFaumtJCz0usLC7t02BoiSalRjBBOy9PBYBo1zLa60MIDKlINqtnG/Td+yeNvYc9rtwYs+lbAyu2m1z4DKjKsCMTTcHNB3XgDwWjnFcsG/Hdr9UBVenNIOosHVUzUrPdcpMxul5ky934WNALnE6hhiQtvRlGoykxtWp1tUAX33Wtvu1m62A0TkNgC3BtKFcdk93OSld99m1RqDAjcgOY+806TbO+o4May0VQSTAlzapjH+JU33hhkh7Djqe35XQstfU3mmnVcb7nS1rYggay4bClW6SUmY1G1WDeyf9JKkrn2cMjsj3eDn+tb+Zv8Amb8qLrSwfi9T6K/PSOm9sUzVa4xdc6z1i3MDAQJzjPWpG21jkSf/AMCPG9VG9S/eJeCL00UAeDkVrV6jYd2hkRmM1cWnT7S7q2B7arXftP2bDOBkCKvZxIMycoUXW6pGDaovEAEMpkzIGdSq4eS1epkbKo2KDgabC0yOrqlpGREiCPEK5sQwd3t/26arWMqE/tA7BlQEm4PqLYADHHINOK2q7B1QeGlzwxpDRULLxuiMnAeOxaL5mX8jNpJ8U6n8LvMLX6NZVBP9rV/3HpNsocAXteDJ7JqVHCA43SQXRiIJG+FLo2Ja87alQ+NRxCxPdpm1e2S9nu1887ET6fCJ52Ku0220dVeszgKjCHhjrt2qG/VSc4g3Q4Ew4RBDdUrQkN21V7jHvibrXOgZm6CYB2rHo22NrUaVZmDajGVADmA9ocAY2SsWibe20UW1A1zQ4EFjwWva5pLXscD+JrgWnu1o0PYW2ehToNffFNjWAmLxDRGMboWrmlywbD7UwVG0i4X3Bzw3WWNIDndwLmjisw5y2c+Kp7BotzbVaLTUulz7lOnBm5RY2YMgQXVHPcRj+FWdortpsc97msY0S5ziGtaAMSXHADeVsCfEZc+ykTzKg0gwQQQcQQdRjy+VJp9PhASupLIhAYY9+clJIjPDemefDegIVKYc0tc0Oa4EOaYIIOYIIgjPBVeidCtsrn9U94okS2iTeZTdOJpk9pjTj2Jug4iFsaRstoeW9TaBRAm8DTFS8eLhClZ6NVtNzatTrX49oMFMRhDboJ8d6jtk41ykuUmZXJjrVi47tixIQvmV2ostm5Te50IxSWEbdlqz2TjGInzVZT0pa6lVop2JzKV6HVK9RrDdnEspsvuJiSL13MTGrfsY7XBbxHf5r3PQ7Z2aVObzh49inckpbD/UIHOSXPnrSOS7BEVlt0i1ri0Mc8xiGtLo77oIHFUVutzy9tSnTqtc2YBoVHtxjGLmYjMEHE7Vs6ZpXKt4guY8Fjm7Q7NuOEkYD94U5yVJatHOacGBwOLXBuBBiS2ag1FtQQNZbhBWrbBktGkK1QtdUs73ubk5tO1Utv5TvPiVEaSf/wANVHfUtfwsLbJU/untnYwuAN4YjtYw4Xv4XHYo/camqi6NQ6t+WMCb2Edtk72FYyzGEbda1PqNDHWchowDhSrPe2Mi18SHD82OO1XP9INcy6aVU4Qf2NTZl9CorFZ3sfDqTnNILXC64EscAHjF2Eghww+oOEgLcY59LraVGnWpm92Xll8ENkZZa5EZnjOU/LMccGEWsMH7OqWtj6HtJbEx2ZAI1jsmAdSx1Lc2o4XqdIuuhrf2lRhIbMAAEA+CKNlqH+zgyLp6t7SHTgJiLn1NI1C67Ut611GOZTqOY1zGu7bX4AQCO1nADovbAHZ5HDbwbJJmOy2M3w5tGlIIIPWVMxrxnYun0TZOqphsycycc8SfVVTNAmXGiH0y515rnFt1pk32Oax0OacAIEjHFWuiLSalOXCHAlpGcObLXN3wQQspjBvGdWeOZPDHwVLY9LWm+KdosT2SYFSm9lWjlmT2XsHezBXkJ8+i2Bo2usSYGQ81rKdcdo+PioL5t1C+yy+Xc+G0X4RSisGez1yCAcR6LVtvR9les2paHOqU2R1dA4UmujF7mj+sdMxewaMhrUwFn0lZ67w3qK7aJBN4updbemIGL2xGO3PUvS/Z3U2WQlGbyljD/or3xSeUbo3bN6ktDRdnrsaRXrNrOJwcyn1QDYyLb7pxkzvW+B6/K9IQE7yajG5JARdzzClKj45+ykBuQEbqoqde11rRDAaFmpOIc97Qaloc0wWsa76KWGLyLzh9MTeV9z4on4QGrWs04t8P1WoQrSd48lT6et9OzMFWs4tYSG4Ne83iDGDGk6jjkvL9W6MpL1KFvndIsV242ZtWN8O71uk5YjX7Lz239MCX022ZlS6XsJc+mWuqw4fsbOyoA57n/S55AaxpJzhdfpnpBZ7JcFZ8F83WgEkgESYGrEZ7V0+i6W6qhQmt8vC84I7pxzktfgpFY7NaG1GMqMIc17Q5rhkQRIKyOHt6hdXBGVOn30gyKrrocYb+aYGIjZmqgaIqVO211FzTkerJkbZ6yFy/SbTrq1d5Z/VsfcYZzDR2nd16ROsAL0DoxZ3U7MwPm84XiMcJxAx3R5rLS9y/qNGqaYzk/wAUvBVjQFTW6nwpt91F2gKm2lxpMKh0k6ROZUFGm6Lp7Tht/LlhyFddHLc6rQa5+ckT+YDXh4cFWjfGVjguUQz0k66lbJbMqf8A+dftpf8ASZ8KLujj/wDlHvos9oXWzljzigKfBWOSb0fqDCKXCkB6lWVm0WxlM0nuBvk53RN4zdA3AxGwBXRXm/Sa2u++1GOJgFobicOy33PmoNRb6Uc4yWtHpnqJuKeMLJ01PQT29ltQ3d7WuMRkXES/vde71c2GyNptujaZ3kySTOsyTKWiapfRpvObmNJzzgSs9qrimxz3ZNBce4AnDnWpo4ayiCUX3dvngyHnnJEbucFzuiulDa1RrLhaXTdMg4gTBw2A5K6t9cspveGueWsc4NYAXugEw0GASYwB1rZrBm2mdUu2awzVtDwXGO7wUGNJMDNcfovprS6prrU4twEWhrHuoVh+YOY09W4/ipuALSY3DtNC2mnWptrU3h9N4lrgCJGP5gDnu1LxD6PqLdW1asRbbbXBP6qUdjYoWeDJz9FU6PtVqpVfu9oaarHSaVpY0AOjEsrsaIpvAGDx2HSMj2VfDn0TcMOPuvX6bS16aHZWsL/claUnJ5YnBP8AkjnyTCsGpKQhQQgAFMJDhyM0wgECgc885onfz4dyQPOW3cgBxw4fKwW6yMq030qmLHCHAOc0xuc0hw1YhZ1JAcpY+g1lo2inXpGowsMlocHF7sYL6jwahGXZDrpujDbw/wBrtdwttMDMUWkbpfUJ8YHgvYnDnHYvKftjsjuts1Vs9pj2Eic2kFuW5zlb0LXrLJHcsxOy+z+re0dQO57deEPcANy2Ol2kuosxIMOfDGnYTiTuwB8lzf2SW6aFSg44sffbn9L8Dh/E1x73JdPLaHVmUziGNJP8ToOzYAtdRBxukn8/5LvTK1bZFPhbv2KHo9ZW1q9KnGE9qJ+lpJPAjDivQukum22alhBqOENGz947hPFcz0NbTpurWl0htNgEn97tGN+EcVUaTtD7Q91R0iTgMYa0fSBjs85XL1l/pxwuWd+6larVYfwRx+vODBY7I60VWsa6XPMknGNbneElepGpSslCSQ2nTaBtwGQAGZJPElc50NsDaFJ1qqkNvDAuMXWDX3uw4ALkelnSJ1rqXWktotPZaZF4/mdv2A5BQ6eKph3S+Jml1ctff6cPgjyzoNK/aOxrP2VNzXlxAL4i6AccNZwwK6Honp373TJdF9pgxIlpGDh5jguF0V0PdaLHVrEEVHC9QGI+k3icRhegtB461VdFNMus1RrxJGAc38zSQC2NRwkbwp1ZOOJS4PNdU9PT6pxrb7eP+nt3OteX9NAG21x2ta7Gc4/Rel2as2oxr2GWubeadoMELg+nllBtDXT9TBt/C4+x8lprt6snU6NNK/6pnUdE64fZWfuS3/KcB4QsXTO1dXZH49p8MGIEkxMT+6CtPoG8inUZJMOBGByLf0VN9oNtL6raDcmAOd/E7b3NH/cptLLuqTN4abu1zguE8+3Jh6AUb1oJjBjSe4ns+5XpS437PLMRTqVD+IhozyaJ9SuxVh/Ii6rZ36mX5YRx9l+z2ytc9z31nuLpvCo6m67+V7qd01D+8+Xb11tNoaLoyAwkknDKScThtU+fVHPusHNCedaHe6OfNBPfnvQC517k26v1RPPBDdXwgCBv8UKFznFCAm08/wAkxzyUhmgeyAJR8/KA7dzrSHcgCEw4JFvxhx1pz6oAXIfaLoV1ps9Pqy0Pp1A4XhLTLSCDGIxIXXjWqzTdSGAY9pw8gZ1d3iob73RXKyLw1uvqbRgptRfk4GnRp6KqU7R1hc17CxzC0F7jhkRENmM8sM5S0zRc6q6q9jZeQYBEtww8MJV5bLCyrTLXhxBgSD2gAcQCRgNRjaq3pE03WVBeJktIF6cWkgjiPNc7p/V5X2V1zeZNtNv9iWyduirlZTjxz8vJV1q5FnNFgAbfLnEQS4gANBGwFvoloeympUuvIbRYC+q84AN2YHN2XitalWMmZGBzx3ZFTquY9rmuaMcJiciN06l2tR09WSU1z8vmUNH9prYSlG1bSfK5WefqS6TdITaSGNBbQYRcbETGAc72GpLol0dda6vaB6lkXz+bWGA7TrOod4WhovQ1W0V+qpg9km8+DdY2TJO/Y3X3ZeyaL0cyz0mUmCGtGZzccJcd5OKoQrlKbc/B7LV6+rTadV6d7yWc/k/7NtlMAABsACAIEADIdy8d6ZaI+7W1xDYp1e2wgCA6Rfb/AJjPc4L2LVq/n/NU3SzQ33uzPptwqDtMMxDgJiRqOI4qeyHdHB4/UV+pFrycn0M6Qim4UKhHVuPYdhDXHbuJ8zvK3PtAYetoHUWv2ZgtjXvK81pveDddLHNcQ4GZBGBBnJwMhWZ0tULQ1zy8AANvkuujWBujVqVC2Tdbgdb7PaDU5VrX4VnDZ2fRG3Ci6s55htwHvuk4DfiuXtNtL6j3v+t5LjuB+kAbhA4Ku++lxF52AjLCBI2DmFsWOswVBfJLLwkgH6cJwG5T6Szsgos9VHR+lOdvLa/g9c6OWXqrNTF2CW3iIiC7E4cV5z0/6X9ZWNmpO/ZMkPcI7dQRIn8rcu/uCy9LPtBFRjqNkLmgiHVDLXQcC1jYlo3mDs2rnvs+6Pm12gPc09VTILziA44XWZa4x3d660IYXdI8lupu2fOcnrnRRtQWSl1n1Fsicw0nsA/4YVyAjdlj7JNdtPPFV5PLyVJy7pNkmwhw5hCOfL+awaihMH3jNBPqjggHdHMoU5QgMfwnh6JEI58kANRx5xTaUc60AnHf5fokecUzzhvKIQCHuqfSVYGqGz9Ix7zHsrlq5i3Pms7X2iPAj4XH61NqjC8ssaaOZE6pIIxO0Z7Cq7SNj6ymWXowkYZOxE544GOKsWMkAwTwWNzg0SSboGvUJ2HvXlaLJQsTh8SexZtjGdbjLjycHWspDiLzpBuuGWfniPVYrRZKpIDDeLnBsGQZJAGO8xit58OcTkCcstg9inQtoY+nU/K4PIOsah4r6a7+2pSnzhfqfP8AP/rhfDn9j0jQWjRZ6LKcy7N7vzPOfCcFY85rkaXT2k4iKT8TH4edSu9F6do18GOh8TddAd+vjrVBWxk+T09d9UsRjIsy72T58kAYc86kR37dakLB5L9oti6q1io0dmq28YH4m4O/8TxXKucfTau8+0xwNSkNTWkcT56h5LiXs9fLBcy3Hc8HvOktvSRz/tzWc87flSa/E+/H9VF4wHek3VryUZ0d8krDoR9ptNOnTcGl74JIJAEEudG4A4a8Ml7zofRtOzUmUaYhrRsxcYxc7eV5V0CMW2lhne2/lK9iAXTptlOCT8Hi+t1xr1HbHhrPuDRkgDUhAO/z3KQ4wBJykEHXzq58EBF3d6Jj33Jz6+yTTggJXkJeHkhALnmUAoGYTCATRzjrRPtt2ptCWrgOcEAcEwJSITKAiFxdrrzUcdpJGX5hGK6231brHbTgOM+0rlatka46xM6wR68yuZ1KpWxUH9S7pMLLZOnarok4EATJG8LV0pagadUyAbmIkRMjFZRZYyOv2/RUmlKZu3QbkjE54CMti4NOjlC2LfCa3J7od0JKK3wzl7TbSZ3n2g54LVoG01iGU6T3nGA1pOs8Iw9F3+hOgQe1r7Q98Ef1YkYEyL2zuC7mxWGnSbdpsDGiAAM+JzK9lqGr8YPM0dPUcqZ42zQdvYLzrJVjEyLpI33QSSYRoy3uY/AltQBwOpwmQZwkEeIwXtxPoqTTXRuz2rtPZdqZCoyGvGGROThudKpz0ya2JJaKPMNmVOiul4qMbTyrgQ/DAQYvbMZB2CVZdUD2nOLnXTiTtnDDLguf0T0Zq0HvZ1d8F7oqS0XmfhnGQYgERqPeupoaJ11HlxmYaYAw25nDuXH1NOr1FjjHKitt9kdWmMYVpyabOZ6TWBlSi8zi0FzZIwIDtgyJkcV5414MHbivUuk/RZ1Zh+71XMeBi0uJY8Zw4mSDOvfkvJrXQqUnFlRj2PGBDpB4HIjeDCno0tlEcTeT1HR9VBwce72Jubh4nn0WFuEb8fNNtdQB5n5Up3XJPdHZfZzZL9rDtVNrnb5MNA8z4L1gc5Lzn7N7E9tR1RwLWlt0T+LEGfAea9HCv6bHZseK61Pv1Tw8pJITB7eyWO5S+d6QHMblYOQRjd8oIHOvJMJhABHPPFCPn2USd/OPx5IDLeTUEIBA8/qhHPCEQgEBzgmBqhEo517UAuCY4cEd+7akEBoaTdN1uySfCNXFabmEeeBU7Q+88nPUMtvfsEwp3N2qNXljKoW/ik2XIfhiiucyNUdxkbta0LHZOstDAcWtLnERhAyB4gK2tLBiRzwnnFS0DSF+o/DCGDHvJGfcoIV91iRM7O2DZfc+SOCRw5HynP6+K6xzRYb9SGoJ9kD3QDB54JA96cHVzxQfhAI/Coel2hmWiiSWAvZLmkgHAQXN4x4wr56RA8t27etZRUlhm9c3CSkjyawWOmSJpNmSfpEjx3rpbPoqldgMbBM4iTPecsgqe02XqqzmZBroxAynv2LoNHOkcMsMDjvy7lycb4Z2JXzccqTLLRdkFNou3hrxLvcq8va+fVVtFsDL01LdonCIyw9N/MK7p9tjl3NyeWZP090yP0SPPMpxn+itkAHnLnWkRxxGz4TJS1oBxu8u5IDnxQOHOCRGOfrxQC6w8lCl1Y5JQgGHceQmOc1Hx5ISBHBAS/mg8USjnzQCIw4BY7Q661zt2/PV6rJdGzYk5gOYETrAWGEUlLykfK2R3bMM+f0Vk2mPyjPZ3phgwwHh4qD0PzJnbnwUdpiOOrjgcFuaDo3aQMYuJcZwzy8gFv8AVt2DwUgABhs1JXT2y7smJ290e0XPnuQ3XzsTOvnGUfPwrBEKOce72TPuUwiPdAIjdtSPxq2Jyg+29AEbt/monf7qRbuCI9kBx3Sqz3a1/wDO0HMjFpx8k9HHA9+XDV5rrH0mui81p7wCde3nBIUWj8I8B7ZalVlpsy7slmOoxFRwaFnOqBn77O5bdndjEDmN2xbAYPyjwQGDYFJCpxeckUpphPfyFLifNID0QefAqYjFHf5oO9M88+CJ9UAfokM8tZTPx6qM4/y15oCHW83U1Lq958kIAHPiERzhr70T6J8RkPdAPnb3oPts3oBQR7IBOPts270DyJ580j8bNqY7wgBvOW9Np3c60m8+e9A+NmtASbzyOCXOuUDnJHH0QA4bvJIDPDy7kR7bPBLZx2IBxzCc+vOSQ55CGoBg88lLh48N6Y+EAIAPOBR+nqmUuf0QEQceKNXDdxT2Za0c86kAT6bkwUc+qP0QAUO5w70zz6Id3oBH3SacMvfWg8OSjnVtQDjmOeSlsQeThrOKQOPj6oCPWDaPH9EKP+VCAzMzPf7lRZkOdqEIBMz/AMRUx9JQhAS58wk3Lw9EkIAbq7kN58kIQA//ANfVMa+CEIBax3/KZ9z6JIQBU1c7U260IQDHPkov+PVCEBIa+CQ580IQCdmOPsouzPcfZCEBkfz4o18R7IQgI6+dqYyCEIB7eKx/i52lCEBJuvgkNXH1CEIBIQhAf//Z)

---


<!-- _class: lead invert
_backgroundColor: #D76B00 -->

## Manos a la obra

---

## Cosas importantes a mencionar

> En las reuniones de BDD juntar diversos roles para que...

> Si no pones distintos perfiles en la reunion no sería BDD

> Spec sirve de doc siempre y cuando esté acualizado

---

## Más material

- Cucumber framework: [cucumber.io/docs/guides/overview/](https://cucumber.io/docs/guides/overview/)
  - cucumber-js: [github.com/cucumber/cucumber-js](https://github.com/cucumber/cucumber-js)
- Behat framework: [docs.behat.org/en/latest/](https://docs.behat.org/en/latest/)

- Specification by example: [bib.convdocs.org/v1856/?download=file](https://bib.convdocs.org/v1856/?download=file)


---

<!-- _class: lead -->

# Preguntas?
