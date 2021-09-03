EECS485

## Lecture 1: Static pages

### The request Response cycle

How two computers communicate with each other on the web.

A client requests some data (requests a webpage)
A server responds to the request (A server responds with an HTML  file)

Server responds with:

HTML
CSS
JavaScript

HTML:

- Describes the content on a page

CSS:

- Describes the layout or style of a page.
- Link to CSS in HTML

![image-20210901092623416](C:\Users\jshim\AppData\Roaming\Typora\typora-user-images\image-20210901092623416.png)



### Static pages

Only HTML/CSS/Images

- No programming language on the server
- Same content every time the page is loaded

Server:

- Loads the file from disk.

- `python3 -m http.server`

- Server process waits for connection from client
- Receives a request
- Looks in content directory, computes file name "index.html"
- Loads file from disk
- Writes response to client: 200 OK, followed by bytes for ./index.html (copy of it)
- Psuedocode:

![image-20210901092948841](C:\Users\jshim\AppData\Roaming\Typora\typora-user-images\image-20210901092948841.png)

#### Python conceptual model

- Language implementations can be compiled or interpreted
- Compiled: program is converted into low level machine code before execution. C/C++
- Interpreted: program is executed by an interpreter, which is another program
  - Python is a program whose input is Python source code (plain text) and whose output is the output of the program described by the source code
  - python is written in C
- Data model:
  - Objects: Python's abstraction for data
  - All data in a python program are represented by objects, they have:
    - Identity (memory address)
    - Type
    - Value
  - Python is strongly, dynamically typed. They type of a value doesn't suddenly change
    - Strong: Type of a value doesn't suddenly change.
    - Dynamic: runtime objects (values) have a type

![image-20210901093852357](C:\Users\jshim\AppData\Roaming\Typora\typora-user-images\image-20210901093852357.png)

- Operations of in Python work with references to objects in memory

  - Python reference is like a C/C++ pointer

  - Assignment means copying the pointer

    ![image-20210901094614871](C:\Users\jshim\AppData\Roaming\Typora\typora-user-images\image-20210901094614871.png)

- Objects are allocated on assignment in a private heap only, and they are deallocated automatically

  - ![image-20210901094735358](C:\Users\jshim\AppData\Roaming\Typora\typora-user-images\image-20210901094735358.png)

    

- How do they automatically deallocate objects?

  - Identify objects that are no longer referenced and free them (delete)
  - Two concurrent methods in Python

- Reference counting

  - Keep track of the number references to each objects
  - If the number of references == 0, then deallocate
  - ![image-20210901095126428](C:\Users\jshim\AppData\Roaming\Typora\typora-user-images\image-20210901095126428.png)

- Garbage collection

  - Periodically detect reference cycles
  - Deallocate "isolated" cycles of objects
  - ![image-20210901095432731](C:\Users\jshim\AppData\Roaming\Typora\typora-user-images\image-20210901095432731.png)
  - Garbage collector runs every once in a while, and it's decided by C program. It looks at the program and looks at objects and references and see if some are never used anymore by the program. (DFS and find the cycles)

- ![image-20210901100041517](C:\Users\jshim\AppData\Roaming\Typora\typora-user-images\image-20210901100041517.png)

