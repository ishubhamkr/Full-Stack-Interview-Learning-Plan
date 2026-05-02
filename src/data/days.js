// eslint-disable-next-line
const DAYS = [
      {
        id:     'day1',
        day:    1,
        title:  'Java Basics',
        topics: ['Java Overview', 'JVM / JDK / JRE', 'Platform Independence', 'main() Method', 'Data Types', 'Access Modifiers', 'Class vs Object'],
        questions: [
          // ── Q1
          {
            q:   'What is Java and what are its key features?',
            tag: 'easy',
            body: `
              <p class="accordion-answer">
                <strong>Explanation:</strong> Java is a high-level, class-based, object-oriented programming language designed to have as few implementation dependencies as possible.<br/><br/>
                <strong>Interview Answer:</strong> Java was created by James Gosling at Sun Microsystems in 1995. Its key features are:
                <br/>• <strong>Simple</strong> — familiar C/C++ syntax, no pointers or manual memory management.
                <br/>• <strong>Object-Oriented</strong> — everything is an object (except primitives).
                <br/>• <strong>Platform-Independent</strong> — compiled to bytecode that runs on any JVM.
                <br/>• <strong>Robust</strong> — strong type checking, exception handling, garbage collection.
                <br/>• <strong>Secure</strong> — no explicit pointer arithmetic; bytecode verifier in JVM.
                <br/>• <strong>Multithreaded</strong> — built-in thread support.
                <br/>• <strong>High Performance</strong> — JIT compilation converts bytecode to native code at runtime.
              </p>`
          },
          // ── Q2
          {
            q:   'What is the difference between JDK, JRE, and JVM?',
            tag: 'easy',
            body: `
              <p class="accordion-answer">
                <strong>Explanation:</strong> These three components form a layered architecture for Java execution.<br/><br/>
                <strong>Interview Answer:</strong>
                <br/>• <strong>JVM (Java Virtual Machine)</strong> — the runtime engine that executes Java bytecode. It is platform-specific (each OS has its own JVM implementation) but provides a platform-independent execution environment for bytecode.
                <br/>• <strong>JRE (Java Runtime Environment)</strong> — JVM + the standard class libraries (java.lang, java.util, etc.). Needed to <em>run</em> Java applications.
                <br/>• <strong>JDK (Java Development Kit)</strong> — JRE + development tools: <code>javac</code> (compiler), <code>javadoc</code>, <code>jar</code>, debugger. Needed to <em>develop</em> Java applications.
                <br/><br/>Relationship: <strong>JDK ⊃ JRE ⊃ JVM</strong>
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Text</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>┌─────────────────────────────┐
│           JDK               │
│  ┌──────────────────────┐   │
│  │        JRE           │   │
│  │  ┌───────────────┐   │   │
│  │  │     JVM       │   │   │
│  │  └───────────────┘   │   │
│  │  + Class Libraries   │   │
│  └──────────────────────┘   │
│  + javac, javadoc, jar …    │
└─────────────────────────────┘</code></pre>
              </div>`
          },
          // ── Q3
          {
            q:   'How does Java achieve platform independence?',
            tag: 'easy',
            body: `
              <p class="accordion-answer">
                <strong>Explanation:</strong> Java's "Write Once, Run Anywhere" (WORA) principle is the result of an intermediate compilation step.<br/><br/>
                <strong>Interview Answer:</strong> The Java compiler (<code>javac</code>) compiles source code (<code>.java</code>) into <strong>bytecode</strong> (<code>.class</code> files), an intermediate binary format that is neither source code nor native machine code. The JVM on the target machine interprets or JIT-compiles this bytecode into native instructions. Because every OS platform ships its own JVM implementation, the same bytecode runs on Windows, Linux, and macOS without recompilation.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Text</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>Hello.java  ──javac──▶  Hello.class (bytecode)
                               │
               ┌───────────────┼───────────────┐
               ▼               ▼               ▼
          JVM (Windows)  JVM (Linux)   JVM (macOS)
          native code    native code   native code</code></pre>
              </div>`
          },
          // ── Q4
          {
            q:   'Explain the <code>main()</code> method signature in Java.',
            tag: 'easy',
            body: `
              <p class="accordion-answer">
                <strong>Explanation:</strong> The <code>main()</code> method is the entry point the JVM looks for to start any standalone Java application.<br/><br/>
                <strong>Interview Answer:</strong> The signature must be exactly <code>public static void main(String[] args)</code>:
                <br/>• <code>public</code> — JVM must access it from outside the class.
                <br/>• <code>static</code> — JVM calls it without creating an instance.
                <br/>• <code>void</code> — no return value is expected by the JVM.
                <br/>• <code>String[] args</code> — command-line arguments passed as an array of Strings.
                <br/><br/>From Java 21, unnamed classes simplify boilerplate for scripts, but the classic signature remains the standard.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>public class Hello {
    public static void main(String[] args) {
        System.out.println("Hello, " + (args.length > 0 ? args[0] : "World"));
    }
}</code></pre>
              </div>`
          },
          // ── Q5
          {
            q:   'What are the eight primitive data types in Java?',
            tag: 'easy',
            body: `
              <p class="accordion-answer">
                <strong>Explanation:</strong> Primitives are the most basic data types — they are not objects and are stored on the stack.<br/><br/>
                <strong>Interview Answer:</strong> Java has exactly eight primitive types grouped by kind:
                <br/>• <strong>Integer:</strong> <code>byte</code> (8-bit), <code>short</code> (16-bit), <code>int</code> (32-bit), <code>long</code> (64-bit)
                <br/>• <strong>Floating-point:</strong> <code>float</code> (32-bit), <code>double</code> (64-bit)
                <br/>• <strong>Character:</strong> <code>char</code> (16-bit Unicode)
                <br/>• <strong>Boolean:</strong> <code>boolean</code> (true/false)
                <br/><br/>Each has a corresponding wrapper class (e.g., <code>Integer</code>, <code>Double</code>) for use in collections and generics.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>byte    b = 127;              // -128 to 127
short   s = 32_767;           // -32,768 to 32,767
int     i = 2_147_483_647;    // ~2.1 billion
long    l = 9_223_372_036L;   // ~9.2 quintillion
float   f = 3.14f;            // 6-7 significant digits
double  d = 3.141592653589;   // 15-16 significant digits
char    c = 'A';              // Unicode U+0041
boolean flag = true;          // true or false</code></pre>
              </div>`
          },
          // ── Q6
          {
            q:   'What is autoboxing and unboxing?',
            tag: 'easy',
            body: `
              <p class="accordion-answer">
                <strong>Explanation:</strong> Java automatically converts between primitives and their wrapper types when needed.<br/><br/>
                <strong>Interview Answer:</strong>
                <br/>• <strong>Autoboxing</strong> — automatic conversion of a primitive to its wrapper object (e.g., <code>int</code> → <code>Integer</code>). Done by the compiler, which inserts <code>Integer.valueOf()</code> calls.
                <br/>• <strong>Unboxing</strong> — automatic conversion of a wrapper object back to a primitive (e.g., <code>Integer</code> → <code>int</code>). Compiler inserts <code>.intValue()</code> calls.
                <br/><br/>Be careful: unboxing a <code>null</code> reference throws a <code>NullPointerException</code>.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>// Autoboxing
Integer boxed = 42;          // compiler: Integer.valueOf(42)

// Unboxing
int primitive = boxed;       // compiler: boxed.intValue()

// NPE trap
Integer n = null;
int x = n;                   // ❌ NullPointerException at runtime</code></pre>
              </div>`
          },
          // ── Q7
          {
            q:   'What are the four access modifiers in Java?',
            tag: 'easy',
            body: `
              <p class="accordion-answer">
                <strong>Explanation:</strong> Access modifiers control the visibility and accessibility of classes, methods, and fields.<br/><br/>
                <strong>Interview Answer:</strong>
                <br/>• <code>private</code> — accessible only within the declaring class.
                <br/>• <code>default</code> (package-private, no keyword) — accessible within the same package.
                <br/>• <code>protected</code> — accessible within the same package <em>and</em> by subclasses in any package.
                <br/>• <code>public</code> — accessible from anywhere.
                <br/><br/>Principle of Least Privilege: always choose the most restrictive modifier that still satisfies the design requirement.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>// Visibility matrix
Modifier     | Same Class | Same Package | Subclass | Other Package
-------------|------------|--------------|----------|--------------
private      |     ✓      |      ✗       |    ✗     |      ✗
(default)    |     ✓      |      ✓       |    ✗     |      ✗
protected    |     ✓      |      ✓       |    ✓     |      ✗
public       |     ✓      |      ✓       |    ✓     |      ✓</code></pre>
              </div>`
          },
          // ── Q8
          {
            q:   'What is the difference between a class and an object?',
            tag: 'easy',
            body: `
              <p class="accordion-answer">
                <strong>Explanation:</strong> This is a fundamental OOP distinction — blueprint vs instance.<br/><br/>
                <strong>Interview Answer:</strong> A <strong>class</strong> is a blueprint or template that defines state (fields) and behaviour (methods). An <strong>object</strong> is a concrete instance of a class created at runtime using the <code>new</code> keyword. Memory is allocated on the heap for each object.
                <br/><br/>Analogy: A class is like an architectural drawing; an object is the actual house built from that drawing. You can build many houses (objects) from one drawing (class).
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>// Class — blueprint
class Car {
    String brand;
    int speed;
    void accelerate() { speed += 10; }
}

// Objects — instances
Car car1 = new Car();   // object 1, own memory
Car car2 = new Car();   // object 2, own memory
car1.brand = "Toyota";
car2.brand = "Honda";</code></pre>
              </div>`
          },
          // ── Q9
          {
            q:   'What is the <code>new</code> keyword and what happens when you call it?',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Explanation:</strong> Understanding <code>new</code> is essential for memory and object lifecycle questions.<br/><br/>
                <strong>Interview Answer:</strong> The <code>new</code> keyword performs three tasks:
                <br/>1. <strong>Allocates</strong> memory on the heap for the new object.
                <br/>2. <strong>Initialises</strong> the object by calling the constructor.
                <br/>3. <strong>Returns</strong> a reference (address) to the newly created object.
                <br/><br/>The reference is stored in a variable (on the stack for local variables, or on the heap as a field of another object).
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>// Step 1: JVM allocates heap memory for a Dog object
// Step 2: Dog() constructor runs, fields initialised
// Step 3: reference stored in stack variable 'dog'
Dog dog = new Dog("Rex");</code></pre>
              </div>`
          },
          // ── Q10
          {
            q:   'What is the difference between <code>==</code> and <code>.equals()</code>?',
            tag: 'easy',
            body: `
              <p class="accordion-answer">
                <strong>Explanation:</strong> A very common interview trap — especially with String literals vs <code>new String()</code>.<br/><br/>
                <strong>Interview Answer:</strong>
                <br/>• <code>==</code> — compares <em>references</em> (memory addresses) for objects; compares <em>values</em> for primitives.
                <br/>• <code>.equals()</code> — compares <em>logical content</em> as defined by the class's override of <code>Object.equals()</code>.
                <br/><br/><code>String</code> overrides <code>.equals()</code> to compare character sequences. Two different <code>String</code> objects with identical content will be <code>==</code> false but <code>.equals()</code> true.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>String a = new String("java");
String b = new String("java");

System.out.println(a == b);        // false — different objects
System.out.println(a.equals(b));   // true  — same content

String c = "java";
String d = "java";
System.out.println(c == d);        // true  — same String pool entry</code></pre>
              </div>`
          },
          // ── Q11
          {
            q:   'What is the String constant pool?',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Explanation:</strong> The String pool is a JVM optimisation that avoids creating duplicate String objects.<br/><br/>
                <strong>Interview Answer:</strong> The <strong>String Constant Pool</strong> (interned pool) is a special memory region in the Heap (Metaspace in Java 8+). When you use a String literal, the JVM first checks the pool; if the value already exists, it reuses that object. If not, it creates a new entry. <code>new String("x")</code> always bypasses the pool and creates a new object. You can explicitly intern a string with <code>str.intern()</code>.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>String s1 = "hello";          // goes to pool
String s2 = "hello";          // reuses pool entry → s1 == s2: true

String s3 = new String("hello");      // heap, outside pool
String s4 = s3.intern();              // returns pool entry
System.out.println(s1 == s4);         // true</code></pre>
              </div>`
          },
          // ── Q12
          {
            q:   'What are type casting and type conversion in Java?',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Explanation:</strong> Java is strongly typed; changing a variable's type requires explicit handling.<br/><br/>
                <strong>Interview Answer:</strong>
                <br/>• <strong>Widening (implicit)</strong> — converting a smaller type to a larger one automatically (e.g., <code>int</code> → <code>long</code>). No data loss.
                <br/>• <strong>Narrowing (explicit cast)</strong> — converting a larger type to a smaller one; possible data loss, requires a cast operator.
                <br/>• <strong>Object casting</strong> — <code>(SubType) obj</code>; throws <code>ClassCastException</code> if incompatible. Use <code>instanceof</code> to check first.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>// Widening — automatic
int i = 100;
long l = i;       // OK, no cast needed

// Narrowing — explicit
double d = 9.99;
int n = (int) d;  // n = 9, decimal part lost

// Object casting
Object obj = "Hello";
if (obj instanceof String s) {  // Java 16 pattern matching
    System.out.println(s.toUpperCase());
}</code></pre>
              </div>`
          },
          // ── Q13
          {
            q:   'What is the difference between <code>int</code> and <code>Integer</code>?',
            tag: 'easy',
            body: `
              <p class="accordion-answer">
                <strong>Explanation:</strong> This tests knowledge of primitives vs wrapper types and the implications of each.<br/><br/>
                <strong>Interview Answer:</strong>
                <br/>• <code>int</code> — primitive, stored on the stack, default value <code>0</code>, cannot be <code>null</code>, cannot be used in generics.
                <br/>• <code>Integer</code> — wrapper class in <code>java.lang</code>, stored on the heap (as an object), default value <code>null</code>, can be used in collections (e.g., <code>List&lt;Integer&gt;</code>), provides utility methods like <code>Integer.parseInt()</code>, <code>Integer.MAX_VALUE</code>.
                <br/><br/><strong>Integer cache:</strong> <code>Integer.valueOf()</code> caches values from -128 to 127, so cached instances share references.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>Integer a = 127;
Integer b = 127;
System.out.println(a == b);   // true  — cached

Integer c = 128;
Integer d = 128;
System.out.println(c == d);   // false — outside cache range</code></pre>
              </div>`
          },
          // ── Q14
          {
            q:   'What is pass-by-value in Java?',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Explanation:</strong> Java is always pass-by-value — a common source of confusion for developers coming from other languages.<br/><br/>
                <strong>Interview Answer:</strong> Java is strictly <strong>pass-by-value</strong>. For primitives, a copy of the value is passed. For objects, a copy of the <em>reference</em> (memory address) is passed — not the object itself. This means:
                <br/>• Reassigning the parameter (e.g., <code>obj = new Foo()</code>) does not affect the caller's variable.
                <br/>• Mutating the object <em>through</em> the parameter (e.g., <code>obj.setName("x")</code>) <em>does</em> affect the original, because both the caller and callee hold copies pointing to the same heap object.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>void reassign(StringBuilder sb) {
    sb = new StringBuilder("new");  // only local copy reassigned
}

void mutate(StringBuilder sb) {
    sb.append(" world");            // affects original object
}

StringBuilder s = new StringBuilder("hello");
reassign(s);
System.out.println(s);  // "hello" — unchanged

mutate(s);
System.out.println(s);  // "hello world" — mutated</code></pre>
              </div>`
          },
          // ── Q15
          {
            q:   'What is the role of the <code>static</code> keyword at the class level?',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Explanation:</strong> <code>static</code> members belong to the class itself, not to any particular instance.<br/><br/>
                <strong>Interview Answer:</strong> When a field or method is declared <code>static</code>:
                <br/>• It belongs to the <strong>class</strong>, not individual objects — only one copy exists in memory regardless of how many instances are created.
                <br/>• It is loaded into memory when the class is loaded (before any objects are created).
                <br/>• It can be accessed via the class name: <code>ClassName.staticField</code>.
                <br/>• A <code>static</code> method cannot access instance (<code>this</code>) members directly because no instance context exists.
                <br/><br/>Common uses: constants (<code>static final</code>), utility/helper methods, counters, factory methods.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>class Counter {
    static int count = 0;  // shared across all instances

    Counter() { count++; }

    static int getCount() { return count; }
}

new Counter(); new Counter(); new Counter();
System.out.println(Counter.getCount()); // 3</code></pre>
              </div>`
          }
        ]
      },
      // ════════════════════════════════════════
      //  DAY 2
      // ════════════════════════════════════════
      {
        id:     'day2',
        day:    2,
        title:  'OOP Concepts',
        topics: ['Encapsulation', 'Inheritance', 'Polymorphism', 'Abstraction', 'Interface vs Abstract Class', 'IS-A Relationship', 'Composition vs Inheritance'],
        questions: [
          // ── Q1
          {
            q:   'What is Encapsulation and why is it important?',
            tag: 'easy',
            body: `
              <p class="accordion-answer">
                <strong>Explanation:</strong> Encapsulation bundles data and the methods that operate on it, and restricts direct external access to internal state.<br/><br/>
                <strong>Interview Answer:</strong> Encapsulation is the OOP principle of hiding an object's internal state and requiring all interaction to go through well-defined methods (getters/setters). It is implemented by declaring fields <code>private</code> and providing <code>public</code> accessor methods. Benefits:
                <br/>• Protects data integrity — validation logic lives in the setter.
                <br/>• Reduces coupling — consumers depend on the interface, not the implementation.
                <br/>• Enables controlled read/write access (e.g., read-only fields).
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>public class BankAccount {
    private double balance;   // hidden state

    public double getBalance() { return balance; }

    public void deposit(double amount) {
        if (amount <= 0) throw new IllegalArgumentException("Amount must be positive");
        balance += amount;    // controlled mutation
    }
}</code></pre>
              </div>`
          },
          // ── Q2
          {
            q:   'What is Inheritance and how is it implemented in Java?',
            tag: 'easy',
            body: `
              <p class="accordion-answer">
                <strong>Explanation:</strong> Inheritance allows a child class to acquire fields and methods of a parent class, promoting code reuse.<br/><br/>
                <strong>Interview Answer:</strong> Inheritance is the mechanism by which a child (sub) class derives the properties and behaviour of a parent (super) class using the <code>extends</code> keyword. Java supports <strong>single inheritance</strong> for classes (one parent only) but <strong>multiple inheritance through interfaces</strong>. The child inherits all non-private members and can override methods to specialise behaviour. <code>Object</code> is the implicit root of every Java class hierarchy.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>class Animal {
    String name;
    void eat() { System.out.println(name + " eats"); }
}

class Dog extends Animal {
    void bark() { System.out.println(name + " barks"); }
}

Dog d = new Dog();
d.name = "Rex";
d.eat();   // inherited
d.bark();  // own method</code></pre>
              </div>`
          },
          // ── Q3
          {
            q:   'What is Polymorphism? Explain compile-time vs runtime polymorphism.',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Explanation:</strong> Polymorphism means "many forms" — the same interface behaving differently depending on context.<br/><br/>
                <strong>Interview Answer:</strong>
                <br/>• <strong>Compile-time (static) polymorphism</strong> — method <em>overloading</em>. The correct method is selected by the compiler based on the number/type of arguments. Also called <em>early binding</em>.
                <br/>• <strong>Runtime (dynamic) polymorphism</strong> — method <em>overriding</em>. A parent-type reference holds a child object; the actual method called is determined at runtime by the object's real type. Also called <em>late binding</em> or <em>dynamic dispatch</em>.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>// Runtime polymorphism
class Shape { void draw() { System.out.println("Shape"); } }
class Circle extends Shape { @Override void draw() { System.out.println("Circle"); } }
class Square extends Shape { @Override void draw() { System.out.println("Square"); } }

Shape s = new Circle();   // parent reference → child object
s.draw();                 // "Circle" — decided at runtime</code></pre>
              </div>`
          },
          // ── Q4
          {
            q:   'What is Abstraction and how is it achieved in Java?',
            tag: 'easy',
            body: `
              <p class="accordion-answer">
                <strong>Explanation:</strong> Abstraction hides implementation details and exposes only the essential behaviour to the user.<br/><br/>
                <strong>Interview Answer:</strong> Abstraction is the process of hiding the <em>how</em> and exposing only the <em>what</em>. In Java it is achieved through:
                <br/>1. <strong>Abstract classes</strong> — declare methods without implementation (<code>abstract void start()</code>); subclasses must provide the body.
                <br/>2. <strong>Interfaces</strong> — 100% abstraction (all methods implicitly abstract pre-Java 8; default/static allowed from Java 8).
                <br/><br/>Think of a TV remote — you press buttons (interface) without knowing the circuit details (implementation).
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>abstract class Vehicle {
    abstract void start();          // no body — must override
    void fuelUp() { System.out.println("Fuelling up"); }
}

class Car extends Vehicle {
    @Override void start() { System.out.println("Car started"); }
}</code></pre>
              </div>`
          },
          // ── Q5
          {
            q:   'What is the difference between an interface and an abstract class?',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Explanation:</strong> One of the most frequently asked OOP design questions.<br/><br/>
                <strong>Interview Answer:</strong>
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Text</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>Feature             Abstract Class         Interface (Java 8+)
-----------------   -------------------    -------------------
Inheritance         extends (single)       implements (multiple)
Constructor         Yes                    No
Instance fields     Yes                    No (only static final)
Method types        abstract + concrete    abstract, default, static
Access modifiers    Any                    public (implicit)
State               Yes                    No
Use case            Shared base code       Contract / capability</code></pre>
              </div>
              <p class="accordion-answer" style="margin-top:10px;">
                <strong>Rule of thumb:</strong> Prefer interfaces to define contracts; use abstract classes only when sharing code among closely related classes.
              </p>`
          },
          // ── Q6
          {
            q:   'What is the IS-A relationship in Java?',
            tag: 'easy',
            body: `
              <p class="accordion-answer">
                <strong>Explanation:</strong> IS-A describes the inheritance hierarchy — whether one type is a specialisation of another.<br/><br/>
                <strong>Interview Answer:</strong> The <strong>IS-A</strong> relationship is established through <code>extends</code> (class inheritance) and <code>implements</code> (interface implementation). It means an object of the subtype can be used wherever the supertype is expected (Liskov Substitution Principle). For example, <code>Dog IS-A Animal</code>, so a <code>Dog</code> reference can be assigned to an <code>Animal</code> variable.
                <br/><br/>The complementary <strong>HAS-A</strong> relationship (composition) means an object contains a reference to another object (e.g., <code>Car HAS-A Engine</code>).
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>class Animal {}
class Dog extends Animal {}   // Dog IS-A Animal

Animal a = new Dog();         // valid — IS-A holds
System.out.println(a instanceof Animal); // true
System.out.println(a instanceof Dog);    // true</code></pre>
              </div>`
          },
          // ── Q7
          {
            q:   'What is Composition and how does it differ from Inheritance?',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Explanation:</strong> "Favour composition over inheritance" is a core design principle from the GoF book.<br/><br/>
                <strong>Interview Answer:</strong>
                <br/>• <strong>Inheritance (IS-A)</strong> — creates a tight compile-time coupling. Changes to the parent class can unexpectedly break subclasses. Use it when the relationship is truly an IS-A.
                <br/>• <strong>Composition (HAS-A)</strong> — an object holds a reference to another object and delegates work to it. Coupling is looser; the inner object can be swapped at runtime (e.g., via dependency injection). Prefer composition for code reuse.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>// Inheritance — tight coupling
class Logger extends FileWriter { ... }

// Composition — flexible
class Logger {
    private final Writer writer;       // HAS-A — injected
    Logger(Writer writer) { this.writer = writer; }
    void log(String msg) throws IOException { writer.write(msg); }
}

// Swap implementation without changing Logger
Logger fileLogger    = new Logger(new FileWriter("app.log"));
Logger consoleLogger = new Logger(new PrintWriter(System.out));</code></pre>
              </div>`
          },
          // ── Q8
          {
            q:   'Can a class implement multiple interfaces? Why does Java allow this?',
            tag: 'easy',
            body: `
              <p class="accordion-answer">
                <strong>Explanation:</strong> Java forbids multiple class inheritance but permits implementing multiple interfaces — understanding why matters.<br/><br/>
                <strong>Interview Answer:</strong> Yes — a class can implement any number of interfaces using a comma-separated list. Java allows this because interfaces only define contracts (no state), so there is no ambiguity about which field or constructor to inherit. This avoids the classic "Diamond Problem" that plagues multiple class inheritance in languages like C++.
                <br/><br/>When two interfaces share a default method with the same signature, the implementing class <em>must</em> override it to resolve the conflict.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>interface Flyable  { void fly(); }
interface Swimmable { void swim(); }

class Duck implements Flyable, Swimmable {
    public void fly()  { System.out.println("Duck flies"); }
    public void swim() { System.out.println("Duck swims"); }
}</code></pre>
              </div>`
          },
          // ── Q9
          {
            q:   'What is method overriding and what are its rules?',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Explanation:</strong> Overriding is the mechanism behind runtime polymorphism.<br/><br/>
                <strong>Interview Answer:</strong> Method overriding occurs when a subclass provides its own implementation of a method inherited from the parent. Rules:
                <br/>• Same method name, return type, and parameter list (covariant return type allowed — subclass of original return type).
                <br/>• Access modifier cannot be more restrictive.
                <br/>• Cannot override <code>static</code>, <code>final</code>, or <code>private</code> methods.
                <br/>• Can throw narrower or fewer checked exceptions.
                <br/>• Always annotate with <code>@Override</code> to catch mistakes at compile time.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>class Parent {
    public Number getValue() { return 42; }
}

class Child extends Parent {
    @Override
    public Integer getValue() { return 100; }  // covariant return type OK
}</code></pre>
              </div>`
          },
          // ── Q10
          {
            q:   'What is the difference between method overloading and method overriding?',
            tag: 'easy',
            body: `
              <p class="accordion-answer">
                <strong>Explanation:</strong> Both involve methods of the same name but are fundamentally different concepts.<br/><br/>
                <strong>Interview Answer:</strong>
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Text</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>Feature        Overloading              Overriding
-----------    ----------------------   ----------------------
Location       Same class               Subclass
Binding        Compile-time (static)    Runtime (dynamic)
Signature      Different params         Same params
Return type    Can differ               Must match (covariant ok)
Polymorphism   Compile-time             Runtime
@Override      Not applicable           Recommended</code></pre>
              </div>`
          },
          // ── Q11
          {
            q:   'What is an abstract class and when should you use one?',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Explanation:</strong> Abstract classes sit between concrete classes and interfaces — they can share code while enforcing contracts.<br/><br/>
                <strong>Interview Answer:</strong> An abstract class is declared with the <code>abstract</code> keyword. It can have abstract methods (no body) that subclasses <em>must</em> implement, as well as concrete methods with full implementations. It cannot be instantiated directly.
                <br/><br/><strong>When to use:</strong> When multiple related classes share common code and state but also need to define specialised behaviour — e.g., a <code>Shape</code> base class with a shared <code>colour</code> field and an abstract <code>area()</code> method.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>abstract class Shape {
    String colour;
    abstract double area();               // must override
    void printColour() {                  // shared implementation
        System.out.println("Colour: " + colour);
    }
}

class Circle extends Shape {
    double radius;
    @Override double area() { return Math.PI * radius * radius; }
}</code></pre>
              </div>`
          },
          // ── Q12
          {
            q:   'What is the <code>instanceof</code> operator?',
            tag: 'easy',
            body: `
              <p class="accordion-answer">
                <strong>Explanation:</strong> <code>instanceof</code> is used for type checking at runtime before casting.<br/><br/>
                <strong>Interview Answer:</strong> The <code>instanceof</code> operator returns <code>true</code> if an object is an instance of a given class or implements a given interface (including through inheritance). It returns <code>false</code> for <code>null</code>. Java 16 introduced <strong>pattern matching</strong> for <code>instanceof</code>, which combines the check and cast into one expression, eliminating boilerplate.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>// Classic
if (obj instanceof String) {
    String s = (String) obj;
    System.out.println(s.length());
}

// Java 16+ pattern matching
if (obj instanceof String s) {      // check + bind in one step
    System.out.println(s.length());
}</code></pre>
              </div>`
          },
          // ── Q13
          {
            q:   'What is the Diamond Problem and how does Java handle it?',
            tag: 'hard',
            body: `
              <p class="accordion-answer">
                <strong>Explanation:</strong> The Diamond Problem arises with multiple inheritance when two parents share a common ancestor.<br/><br/>
                <strong>Interview Answer:</strong> If class <code>D</code> extends both <code>B</code> and <code>C</code>, which both extend <code>A</code>, and all define a method <code>foo()</code>, then <code>D</code> is ambiguous about which <code>foo()</code> to call — this is the Diamond Problem. Java avoids it for classes (single inheritance only). With interfaces, if two interfaces provide a <code>default</code> method with the same signature, the implementing class must explicitly override it to resolve the conflict.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>interface A { default void hello() { System.out.println("A"); } }
interface B extends A { default void hello() { System.out.println("B"); } }
interface C extends A { default void hello() { System.out.println("C"); } }

class D implements B, C {
    @Override
    public void hello() {
        B.super.hello();    // explicitly choose B's version
    }
}</code></pre>
              </div>`
          },
          // ── Q14
          {
            q:   'What is cohesion and coupling in OOP design?',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Explanation:</strong> These are fundamental metrics for evaluating the quality of an OOP design.<br/><br/>
                <strong>Interview Answer:</strong>
                <br/>• <strong>Cohesion</strong> — how closely related and focused the responsibilities of a class are. <em>High cohesion</em> is desirable — a class does one thing well (Single Responsibility Principle).
                <br/>• <strong>Coupling</strong> — how dependent classes are on each other. <em>Low coupling</em> is desirable — changes to one class should have minimal impact on others.
                <br/><br/><strong>Goal:</strong> Design systems with <em>high cohesion</em> and <em>low coupling</em>. Encapsulation, interfaces, and dependency injection are the main tools to achieve this.
              </p>`
          },
          // ── Q15
          {
            q:   'What are the SOLID principles?',
            tag: 'hard',
            body: `
              <p class="accordion-answer">
                <strong>Explanation:</strong> SOLID is a set of five design principles for writing maintainable OOP code.<br/><br/>
                <strong>Interview Answer:</strong>
                <br/>• <strong>S</strong>ingle Responsibility Principle — a class should have only one reason to change.
                <br/>• <strong>O</strong>pen/Closed Principle — open for extension, closed for modification. Add behaviour via new classes, not by editing existing ones.
                <br/>• <strong>L</strong>iskov Substitution Principle — subtypes must be substitutable for their supertypes without breaking correctness.
                <br/>• <strong>I</strong>nterface Segregation Principle — prefer many focused interfaces over one fat interface.
                <br/>• <strong>D</strong>ependency Inversion Principle — depend on abstractions, not concrete implementations. High-level modules should not depend on low-level modules.
              </p>`
          }
        ]
      },
      // ════════════════════════════════════════
      //  DAY 3
      // ════════════════════════════════════════
      {
        id:     'day3',
        day:    3,
        title:  'Java Core',
        topics: ['Constructors', 'Constructor Overloading', 'Method Overloading vs Overriding', 'static Keyword', 'super Keyword', 'final Keyword', 'final vs finally vs finalize'],
        questions: [
          // ── Q1
          {
            q:   'What is a constructor in Java?',
            tag: 'easy',
            body: `
              <p class="accordion-answer">
                <strong>Explanation:</strong> Constructors are special methods that initialise a new object — they are called automatically by the <code>new</code> keyword.<br/><br/>
                <strong>Interview Answer:</strong> A constructor is a special block of code that is invoked when an object is created. Key properties:
                <br/>• Same name as the class.
                <br/>• No return type (not even <code>void</code>).
                <br/>• Called automatically by the JVM after memory allocation.
                <br/>• If no constructor is defined, the compiler inserts a no-arg <strong>default constructor</strong>.
                <br/>• Constructors are not inherited; they can call the parent constructor via <code>super()</code>.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>class Person {
    String name;
    int age;

    // Constructor
    Person(String name, int age) {
        this.name = name;
        this.age  = age;
    }
}

Person p = new Person("Alice", 30);  // constructor invoked</code></pre>
              </div>`
          },
          // ── Q2
          {
            q:   'What is constructor overloading?',
            tag: 'easy',
            body: `
              <p class="accordion-answer">
                <strong>Explanation:</strong> Constructor overloading provides flexibility in how objects are created.<br/><br/>
                <strong>Interview Answer:</strong> Constructor overloading means defining multiple constructors in the same class with different parameter lists. The compiler selects the correct constructor at compile time based on the arguments passed. A common pattern is to chain constructors using <code>this()</code> to avoid code duplication (telescoping constructor pattern). Java 14+ Records and Builder pattern are modern alternatives for complex objects.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>class Rectangle {
    int width, height;

    Rectangle() { this(1, 1); }                 // delegates to next

    Rectangle(int side) { this(side, side); }   // square shortcut

    Rectangle(int width, int height) {
        this.width  = width;
        this.height = height;
    }
}

Rectangle r1 = new Rectangle();          // 1 × 1
Rectangle r2 = new Rectangle(5);         // 5 × 5
Rectangle r3 = new Rectangle(3, 7);      // 3 × 7</code></pre>
              </div>`
          },
          // ── Q3
          {
            q:   'What is the default constructor and when is it provided?',
            tag: 'easy',
            body: `
              <p class="accordion-answer">
                <strong>Explanation:</strong> The default constructor is often misunderstood — it is compiler-generated, not always present.<br/><br/>
                <strong>Interview Answer:</strong> If a class declares <strong>no</strong> constructors at all, the Java compiler automatically inserts a <strong>no-argument default constructor</strong> that calls <code>super()</code> and initialises fields to default values (<code>0</code>, <code>null</code>, <code>false</code>). As soon as you define <em>any</em> constructor yourself, the compiler no longer inserts the default one. If you still need a no-arg constructor alongside parameterised ones, you must write it explicitly.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>class A { }               // compiler adds: A() { super(); }

class B {
    B(int x) { }          // explicit constructor → no default
    // B b = new B();     // ❌ compile error — no no-arg constructor
}

class C {
    C() { }               // explicitly added back
    C(int x) { }
}</code></pre>
              </div>`
          },
          // ── Q4
          {
            q:   'What is the <code>this</code> keyword in Java?',
            tag: 'easy',
            body: `
              <p class="accordion-answer">
                <strong>Explanation:</strong> <code>this</code> is a reference to the current object — essential for disambiguation and constructor chaining.<br/><br/>
                <strong>Interview Answer:</strong> <code>this</code> refers to the current instance of the class. Main uses:
                <br/>1. <strong>Disambiguate</strong> instance fields from constructor/method parameters of the same name.
                <br/>2. <strong>Constructor chaining</strong> — <code>this(args)</code> calls another constructor in the same class; must be the first statement.
                <br/>3. <strong>Pass current object</strong> as an argument to another method.
                <br/><br/><code>this</code> cannot be used in a <code>static</code> context because no instance exists.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>class Employee {
    String name;
    int id;

    Employee(String name, int id) {
        this.name = name;   // disambiguates field from param
        this.id   = id;
    }

    void print() {
        System.out.println(this.name + " #" + this.id);
    }
}</code></pre>
              </div>`
          },
          // ── Q5
          {
            q:   'What is the <code>super</code> keyword and what are its uses?',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Explanation:</strong> <code>super</code> gives a subclass access to the parent class's members and constructor.<br/><br/>
                <strong>Interview Answer:</strong> <code>super</code> refers to the immediate parent class. Three uses:
                <br/>1. <strong>Call parent constructor</strong> — <code>super(args)</code> must be the first statement in a child constructor. If omitted, the compiler inserts a no-arg <code>super()</code> call automatically.
                <br/>2. <strong>Access overridden method</strong> — <code>super.methodName()</code> invokes the parent's version of an overridden method.
                <br/>3. <strong>Access hidden parent field</strong> — when a child declares a field with the same name as the parent's.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>class Animal {
    String sound = "...";
    Animal(String sound) { this.sound = sound; }
    void speak() { System.out.println(sound); }
}

class Dog extends Animal {
    Dog() {
        super("Woof");            // 1. call parent constructor
    }
    @Override void speak() {
        super.speak();            // 2. call parent method
        System.out.println("(tail wagging)");
    }
}</code></pre>
              </div>`
          },
          // ── Q6
          {
            q:   'What does the <code>static</code> keyword mean and where can it be applied?',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Explanation:</strong> <code>static</code> binds a member to the class rather than to any instance — one of the most versatile keywords in Java.<br/><br/>
                <strong>Interview Answer:</strong> <code>static</code> can be applied to:
                <br/>• <strong>Fields</strong> — one shared copy per class, initialised when class loads.
                <br/>• <strong>Methods</strong> — called on the class; cannot access <code>this</code> or instance members directly.
                <br/>• <strong>Nested classes</strong> — static nested class has no reference to the enclosing instance.
                <br/>• <strong>Initialiser blocks</strong> — <code>static { }</code> runs once when the class is loaded, before any constructor.
                <br/>• <strong>Imports</strong> — <code>import static java.lang.Math.PI</code> allows using <code>PI</code> directly.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>class Config {
    static final String APP_NAME;        // static field

    static {                             // static initialiser
        APP_NAME = System.getenv("APP_NAME") != null
            ? System.getenv("APP_NAME") : "DefaultApp";
    }

    static String getAppName() {         // static method
        return APP_NAME;
    }
}</code></pre>
              </div>`
          },
          // ── Q7
          {
            q:   'What does the <code>final</code> keyword do when applied to a variable, method, and class?',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Explanation:</strong> <code>final</code> restricts modification in three different contexts.<br/><br/>
                <strong>Interview Answer:</strong>
                <br/>• <strong>Variable</strong> — the variable can be assigned only once (a constant). For primitives, the value cannot change. For object references, the reference cannot point to a different object (but the object's state can still mutate).
                <br/>• <strong>Method</strong> — the method cannot be overridden in any subclass.
                <br/>• <strong>Class</strong> — the class cannot be subclassed. Examples: <code>String</code>, <code>Integer</code>, all wrapper types.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>// final variable
final int MAX = 100;
// MAX = 200;  ❌ compile error

// final reference — reference fixed, object mutable
final List&lt;String&gt; list = new ArrayList&lt;&gt;();
list.add("ok");      // ✓ object mutated
// list = new ArrayList&lt;&gt;(); ❌ reference cannot change

// final method
class Parent { final void display() {} }
class Child extends Parent {
    // @Override void display() {} ❌ cannot override
}

// final class
final class Immutable { }</code></pre>
              </div>`
          },
          // ── Q8
          {
            q:   'What is the difference between <code>final</code>, <code>finally</code>, and <code>finalize()</code>?',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Explanation:</strong> A classic Java interview question testing knowledge of three unrelated concepts with similar names.<br/><br/>
                <strong>Interview Answer:</strong>
                <br/>• <code>final</code> — a <em>keyword</em>: makes a variable constant, a method non-overridable, or a class non-extendable.
                <br/>• <code>finally</code> — a <em>block</em> in exception handling that always executes after try-catch, used for cleanup. Skipped only if <code>System.exit()</code> is called or the JVM crashes.
                <br/>• <code>finalize()</code> — a <em>method</em> in <code>java.lang.Object</code> that the GC <em>may</em> call before reclaiming an object's memory. Deprecated in Java 9, removed in Java 18. Unreliable — never use it for resource cleanup; use <code>try-with-resources</code> instead.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>// finally — guaranteed cleanup
try (Connection conn = getConnection()) {         // try-with-resources
    // use conn
} catch (SQLException e) {
    e.printStackTrace();
}
// conn.close() called automatically — preferred over finally

// finalize — deprecated, do NOT rely on
@Override
@Deprecated
protected void finalize() { /* unreliable, avoid */ }</code></pre>
              </div>`
          },
          // ── Q9
          {
            q:   'What is the difference between checked and unchecked exceptions?',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Explanation:</strong> Java's exception hierarchy enforces different handling strategies for different categories of error.<br/><br/>
                <strong>Interview Answer:</strong>
                <br/>• <strong>Checked exceptions</strong> — extend <code>Exception</code> (not <code>RuntimeException</code>). The compiler forces the caller to either handle them in a try-catch or declare them with <code>throws</code>. Examples: <code>IOException</code>, <code>SQLException</code>. Represent <em>recoverable</em> conditions.
                <br/>• <strong>Unchecked exceptions</strong> — extend <code>RuntimeException</code>. The compiler does not require handling. Examples: <code>NullPointerException</code>, <code>IllegalArgumentException</code>. Represent <em>programming bugs</em>.
                <br/>• <strong>Errors</strong> — extend <code>Error</code>; fatal JVM conditions not meant to be caught: <code>OutOfMemoryError</code>, <code>StackOverflowError</code>.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>// Checked — must handle or declare
void readFile(String path) throws IOException {
    Files.readAllLines(Path.of(path));
}

// Unchecked — optional handling
void process(String s) {
    Objects.requireNonNull(s, "s must not be null"); // throws NPE if null
}</code></pre>
              </div>`
          },
          // ── Q10
          {
            q:   'What is exception handling and what are <code>try</code>, <code>catch</code>, <code>finally</code>, <code>throw</code>, <code>throws</code>?',
            tag: 'easy',
            body: `
              <p class="accordion-answer">
                <strong>Explanation:</strong> Java provides five keywords for managing the exception lifecycle.<br/><br/>
                <strong>Interview Answer:</strong>
                <br/>• <code>try</code> — wraps code that might throw an exception.
                <br/>• <code>catch</code> — handles a specific exception type; multiple blocks allowed (most specific first).
                <br/>• <code>finally</code> — executes regardless of outcome (cleanup).
                <br/>• <code>throw</code> — explicitly throws an exception object from within a method.
                <br/>• <code>throws</code> — declares that a method <em>may</em> throw a checked exception, pushing responsibility to the caller.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>void divide(int a, int b) throws ArithmeticException {
    if (b == 0) throw new ArithmeticException("Division by zero");  // throw
    System.out.println(a / b);
}

try {
    divide(10, 0);
} catch (ArithmeticException e) {
    System.err.println("Caught: " + e.getMessage());
} finally {
    System.out.println("Always runs");
}</code></pre>
              </div>`
          },
          // ── Q11
          {
            q:   'What is a custom exception and how do you create one?',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Explanation:</strong> Custom exceptions provide domain-specific, meaningful error types for your application.<br/><br/>
                <strong>Interview Answer:</strong> You create a custom exception by extending <code>Exception</code> (checked) or <code>RuntimeException</code> (unchecked). Best practices:
                <br/>• Name it descriptively ending in <code>Exception</code>.
                <br/>• Provide a message constructor and a cause constructor for wrapping root causes.
                <br/>• Prefer unchecked (RuntimeException) for business rule violations that callers typically cannot recover from programmatically.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>// Custom unchecked exception
public class InsufficientFundsException extends RuntimeException {
    private final double amount;

    public InsufficientFundsException(double amount) {
        super("Insufficient funds: required " + amount);
        this.amount = amount;
    }

    public double getAmount() { return amount; }
}

// Usage
void withdraw(double amount) {
    if (amount > balance) throw new InsufficientFundsException(amount);
    balance -= amount;
}</code></pre>
              </div>`
          },
          // ── Q12
          {
            q:   'What is a static initialiser block?',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Explanation:</strong> Static initialisers run class-level setup logic before any constructor is called.<br/><br/>
                <strong>Interview Answer:</strong> A static initialiser block (<code>static { }</code>) is executed once when the class is first loaded by the ClassLoader, before any object is created or any static method is called. It is used to initialise complex static fields that cannot be set in a single expression — for example, loading configuration, populating static collections, or initialising JDBC drivers. Multiple static blocks run in textual order.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>class DBConfig {
    static final Map&lt;String, String&gt; PROPS;

    static {
        PROPS = new HashMap&lt;&gt;();
        PROPS.put("url",      "jdbc:postgresql://localhost:5432/db");
        PROPS.put("user",     "admin");
        PROPS.put("password", "secret");
    }
}</code></pre>
              </div>`
          },
          // ── Q13
          {
            q:   'What is an instance initialiser block?',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Explanation:</strong> Instance initialisers run before the constructor body — useful for shared setup across overloaded constructors.<br/><br/>
                <strong>Interview Answer:</strong> An instance initialiser block (<code>{ }</code> without <code>static</code>) runs every time an object is created, just before the constructor body executes. The compiler copies the block into every constructor. Unlike static blocks, instance blocks have access to instance members. They are rarely used directly in modern Java; constructor chaining with <code>this()</code> is usually preferred.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>class Demo {
    int value;

    {                                      // instance initialiser
        System.out.println("Instance block runs");
        value = 10;
    }

    Demo()        { System.out.println("No-arg constructor"); }
    Demo(int val) { this.value = val; System.out.println("Param constructor"); }
}

// Output for new Demo():
// Instance block runs
// No-arg constructor</code></pre>
              </div>`
          },
          // ── Q14
          {
            q:   'What is the order of execution of constructors in inheritance?',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Explanation:</strong> Understanding constructor execution order prevents surprises when working with inheritance chains.<br/><br/>
                <strong>Interview Answer:</strong> When a subclass object is created, Java executes in this order:
                <br/>1. Static initialisers of the parent class (first time the class loads).
                <br/>2. Static initialisers of the child class.
                <br/>3. Instance initialisers and constructor of the <strong>parent</strong> class (<code>super()</code> call).
                <br/>4. Instance initialisers and constructor of the <strong>child</strong> class.
                <br/><br/>Key rule: the parent constructor always completes before the child constructor body runs.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>class A {
    A() { System.out.println("A constructor"); }
}
class B extends A {
    B() { System.out.println("B constructor"); }
}
class C extends B {
    C() { System.out.println("C constructor"); }
}

new C();
// Output:
// A constructor
// B constructor
// C constructor</code></pre>
              </div>`
          },
          // ── Q15
          {
            q:   'What is a <code>final</code> class? Why is <code>String</code> immutable and final?',
            tag: 'hard',
            body: `
              <p class="accordion-answer">
                <strong>Explanation:</strong> <code>String</code> immutability is a fundamental design decision that affects many Java features.<br/><br/>
                <strong>Interview Answer:</strong> <code>String</code> is <code>final</code> (cannot be subclassed) and immutable (its internal <code>char[]</code> / <code>byte[]</code> cannot change after creation) for several reasons:
                <br/>• <strong>String Pool safety</strong> — if Strings were mutable, sharing pool entries would cause unexpected side effects.
                <br/>• <strong>HashMap key safety</strong> — the hash code is cached on first call; mutation would break hash-based lookups.
                <br/>• <strong>Security</strong> — class names, network hostnames, and credentials passed as Strings cannot be silently changed after validation.
                <br/>• <strong>Thread safety</strong> — immutable objects are inherently thread-safe; no synchronisation needed.
                <br/>• <strong>Performance</strong> — hash code caching, pool sharing, and JIT inlining opportunities.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>String s = "hello";
s.toUpperCase();              // creates a NEW String "HELLO"
System.out.println(s);        // still "hello" — original unchanged

// Use StringBuilder for mutable string operations
StringBuilder sb = new StringBuilder("hello");
sb.append(" world");          // mutates in place — O(1) amortised
System.out.println(sb);       // "hello world"</code></pre>
              </div>`
          }
        ]
      },
      // ════════════════════════════════════════
      //  DAY 4
      // ════════════════════════════════════════
      {
        id:     'day4',
        day:    4,
        title:  'JVM & Memory',
        topics: ['Heap vs Stack', 'Garbage Collection', 'ClassLoader', 'Object Creation', 'Shallow vs Deep Copy', 'Memory Leaks'],
        questions: [
          // ── Q1
          {
            q:   'What is the difference between the Heap and Stack in Java memory?',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Explanation:</strong> Heap and Stack serve different purposes and have different lifecycles in the JVM.<br/><br/>
                <strong>Interview Answer:</strong>
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Text</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>Feature          Stack                      Heap
-----------      -------------------------  -------------------------
Stores           Local vars, method frames  Objects, instance fields
Size             Small (512 KB – few MB)    Large (controlled by -Xmx)
Lifecycle        LIFO; auto-freed on return Managed by GC
Thread-safety    Per-thread (safe)          Shared (needs sync)
Speed            Very fast                  Slower (GC overhead)
Error            StackOverflowError         OutOfMemoryError</code></pre>
              </div>
              <p class="accordion-answer" style="margin-top:10px;">
                When a method is called a new <em>stack frame</em> is pushed containing local variables and the return address. When it returns the frame is popped. Object references live on the stack; the actual objects live on the heap.
              </p>`
          },
          // ── Q2
          {
            q:   'Describe the JVM Heap structure — Young Gen, Old Gen, and Metaspace.',
            tag: 'hard',
            body: `
              <p class="accordion-answer">
                <strong>Explanation:</strong> The heap is divided into generations based on object age to make GC more efficient.<br/><br/>
                <strong>Interview Answer:</strong>
                <br/>• <strong>Young Generation</strong> — newly created objects land in <em>Eden</em>. After a Minor GC, survivors move to one of two <em>Survivor spaces</em> (S0/S1). Objects that survive several GC cycles (default threshold 15) are promoted to Old Gen.
                <br/>• <strong>Old Generation (Tenured)</strong> — long-lived objects. Collected by a Major or Full GC, which is slower.
                <br/>• <strong>Metaspace</strong> (Java 8+, replaces PermGen) — class metadata, method bytecode, static variables. Stored off-heap in native memory; auto-grows (capped with <code>-XX:MaxMetaspaceSize</code>).
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Text</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>┌──────────────── HEAP ─────────────────┐  ┌── OFF-HEAP ──┐
│  Young Gen              │  Old Gen    │  │  Metaspace   │
│  ┌───────┬────┬────┐    │             │  │ (class meta) │
│  │ Eden  │ S0 │ S1 │──▶ │  Tenured    │  │              │
│  └───────┴────┴────┘    │             │  └──────────────┘
└───────────────────────────────────────┘</code></pre>
              </div>`
          },
          // ── Q3
          {
            q:   'What is Garbage Collection and how does it work?',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Explanation:</strong> GC automatically reclaims memory occupied by objects that are no longer reachable.<br/><br/>
                <strong>Interview Answer:</strong> The GC periodically identifies objects with no live references (unreachable from GC roots: stack variables, static fields, JNI refs) and frees their memory. The main phases are:
                <br/>• <strong>Mark</strong> — traverse the object graph from GC roots, marking reachable objects.
                <br/>• <strong>Sweep</strong> — reclaim memory of unmarked (unreachable) objects.
                <br/>• <strong>Compact</strong> (optional) — move surviving objects together to eliminate fragmentation.
                <br/><br/><strong>Minor GC</strong> — collects Young Gen; fast, frequent.<br/>
                <strong>Major/Full GC</strong> — collects Old Gen (and sometimes whole heap); slow, stop-the-world pause.
              </p>`
          },
          // ── Q4
          {
            q:   'What are the main GC algorithms in Java?',
            tag: 'hard',
            body: `
              <p class="accordion-answer">
                <strong>Explanation:</strong> Different workloads require different trade-offs between throughput and latency.<br/><br/>
                <strong>Interview Answer:</strong>
                <br/>• <strong>Serial GC</strong> (<code>-XX:+UseSerialGC</code>) — single-threaded mark-sweep-compact. Good for small heaps (&lt;256 MB) or single-core environments.
                <br/>• <strong>Parallel GC</strong> (<code>-XX:+UseParallelGC</code>) — multi-threaded, throughput-focused. Default before Java 9.
                <br/>• <strong>G1 GC</strong> (<code>-XX:+UseG1GC</code>) — region-based; splits heap into equal regions, collects highest-garbage regions first. Predictable pause times. Default since Java 9.
                <br/>• <strong>ZGC</strong> (<code>-XX:+UseZGC</code>) — concurrent, ultra-low latency (&lt;1 ms pauses). Production-ready since Java 15.
                <br/>• <strong>Shenandoah</strong> — concurrent compaction similar to ZGC; available from Java 12.
              </p>`
          },
          // ── Q5
          {
            q:   'What is a ClassLoader and how does the parent-delegation model work?',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Explanation:</strong> ClassLoaders are responsible for loading bytecode; the delegation model ensures core classes cannot be spoofed.<br/><br/>
                <strong>Interview Answer:</strong> A <code>ClassLoader</code> locates and loads <code>.class</code> files into the JVM. Three built-in loaders form a hierarchy:
                <br/>1. <strong>Bootstrap ClassLoader</strong> — loads <code>java.lang.*</code>, <code>rt.jar</code> (native code; no Java representation).
                <br/>2. <strong>Extension / Platform ClassLoader</strong> — loads <code>lib/ext</code> or JDK modules.
                <br/>3. <strong>Application ClassLoader</strong> — loads classes from the classpath (<code>-cp</code>).
                <br/><br/><strong>Delegation:</strong> When asked to load a class, a loader first delegates to its <em>parent</em>. Only if the parent cannot find the class does the child attempt to load it itself. This prevents a malicious or buggy <code>java.lang.String</code> from replacing the real one.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>ClassLoader cl = MyClass.class.getClassLoader();
System.out.println(cl);             // AppClassLoader
System.out.println(cl.getParent()); // PlatformClassLoader
// Bootstrap has no Java object → null</code></pre>
              </div>`
          },
          // ── Q6
          {
            q:   'Walk through the steps of object creation with <code>new</code>.',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Explanation:</strong> Object creation is a multi-step JVM process involving class loading, memory allocation, and initialisation.<br/><br/>
                <strong>Interview Answer:</strong> When <code>new MyClass(args)</code> is executed:
                <br/>1. <strong>Class loading</strong> — JVM checks if <code>MyClass</code> is already loaded; if not, the ClassLoader loads it.
                <br/>2. <strong>Memory allocation</strong> — JVM allocates space on the heap (using pointer bump or free-list). All fields are set to default zero values.
                <br/>3. <strong>Static initialisers</strong> — run once if the class has just been loaded.
                <br/>4. <strong>Instance initialisers &amp; field initialisers</strong> — run in textual order.
                <br/>5. <strong>Constructor body</strong> — executes, starting with the parent constructor chain (<code>super()</code>).
                <br/>6. <strong>Reference returned</strong> — the caller's variable now points to the fully initialised object.
              </p>`
          },
          // ── Q7
          {
            q:   'What is the difference between shallow copy and deep copy?',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Explanation:</strong> Copying objects is subtle because objects may contain references to other objects.<br/><br/>
                <strong>Interview Answer:</strong>
                <br/>• <strong>Shallow copy</strong> — creates a new object and copies all field values. For <em>primitive</em> fields the value is duplicated. For <em>reference</em> fields only the reference (address) is copied — both the original and copy point to the <em>same</em> inner objects. Mutating the inner object affects both.
                <br/>• <strong>Deep copy</strong> — recursively copies all objects in the graph. The copy is completely independent. Achieved via: custom clone logic, copy constructors, serialisation/deserialisation, or mapping libraries.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>class Address { String city; }

class Person implements Cloneable {
    String name;
    Address address;

    // Shallow copy — address reference shared
    @Override
    public Person clone() throws CloneNotSupportedException {
        return (Person) super.clone();
    }

    // Deep copy — new Address created
    public Person deepCopy() {
        Person p = new Person();
        p.name = this.name;
        p.address = new Address();
        p.address.city = this.address.city;
        return p;
    }
}</code></pre>
              </div>`
          },
          // ── Q8
          {
            q:   'What is a memory leak in Java and how can it happen?',
            tag: 'hard',
            body: `
              <p class="accordion-answer">
                <strong>Explanation:</strong> Java's GC does not eliminate memory leaks — it only collects <em>unreachable</em> objects. Objects that are reachable but no longer needed are leaks.<br/><br/>
                <strong>Interview Answer:</strong> A memory leak occurs when objects remain reachable (referenced) but are never used again. Common causes:
                <br/>• <strong>Static collections</strong> — objects added to a static <code>Map</code>/<code>List</code> and never removed.
                <br/>• <strong>Listeners / callbacks</strong> — registering listeners without deregistering them.
                <br/>• <strong>ThreadLocal</strong> — values not removed in thread pool threads persist indefinitely.
                <br/>• <strong>Inner class references</strong> — non-static inner classes hold an implicit reference to the outer class.
                <br/>• <strong>Caches without eviction</strong> — unbounded caches grow forever; use <code>WeakHashMap</code> or a proper cache like Caffeine.
                <br/><br/>Detection: heap profilers (VisualVM, YourKit, Eclipse MAT), GC logs, <code>-Xmx</code> + <code>OutOfMemoryError</code> heap dump.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>// Classic leak — static cache with no eviction
class Cache {
    private static final Map&lt;String, byte[]&gt; store = new HashMap&lt;&gt;();

    static void put(String key, byte[] data) {
        store.put(key, data);  // ❌ never evicted → heap grows forever
    }
}

// Fix — use a cache with max size and eviction
private static final Map&lt;String, byte[]&gt; store =
    Caffeine.newBuilder().maximumSize(1000).build().asMap();</code></pre>
              </div>`
          },
          // ── Q9
          {
            q:   'What are <code>WeakReference</code>, <code>SoftReference</code>, and <code>PhantomReference</code>?',
            tag: 'hard',
            body: `
              <p class="accordion-answer">
                <strong>Explanation:</strong> Java provides reference strength levels that interact with the GC to avoid memory leaks while still benefiting from caching.<br/><br/>
                <strong>Interview Answer:</strong>
                <br/>• <strong>Strong reference</strong> (default) — object is never GC'd while the reference exists.
                <br/>• <strong>SoftReference</strong> — GC <em>may</em> collect the object when memory is low. Suitable for memory-sensitive caches.
                <br/>• <strong>WeakReference</strong> — GC collects the object at the <em>next</em> GC cycle if no strong/soft references exist. Used in <code>WeakHashMap</code> (key auto-removed when collected).
                <br/>• <strong>PhantomReference</strong> — object is already finalised; used for post-mortem cleanup actions via <code>ReferenceQueue</code>. Replaces the deprecated <code>finalize()</code>.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>// WeakReference example — auto-collected under GC pressure
WeakReference&lt;ExpensiveObject&gt; ref = new WeakReference&lt;&gt;(new ExpensiveObject());

ExpensiveObject obj = ref.get(); // null if GC has collected it
if (obj != null) {
    obj.use();
}</code></pre>
              </div>`
          },
          // ── Q10
          {
            q:   'What is JIT compilation and how does it improve performance?',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Explanation:</strong> JIT compilation bridges the gap between bytecode interpretation and native execution speed.<br/><br/>
                <strong>Interview Answer:</strong> The JVM starts by interpreting bytecode, then monitors which code paths are executed frequently (<em>hot spots</em>). The <strong>Just-In-Time (JIT) compiler</strong> compiles those hot methods into optimised native machine code at runtime. Optimisations include: method inlining, dead code elimination, loop unrolling, and escape analysis (stack-allocating objects that don't escape a method).
                <br/><br/><strong>C1 compiler</strong> — fast compilation with basic optimisations (for startup).<br/>
                <strong>C2 compiler</strong> — aggressive optimisations for peak throughput.<br/>
                <strong>Tiered compilation</strong> (default) — starts with C1 then promotes hot methods to C2.
              </p>`
          },
          // ── Q11
          {
            q:   'What is <code>StackOverflowError</code> and what causes it?',
            tag: 'easy',
            body: `
              <p class="accordion-answer">
                <strong>Explanation:</strong> The thread stack has a fixed size; exceeding it crashes the thread.<br/><br/>
                <strong>Interview Answer:</strong> <code>StackOverflowError</code> is thrown when the thread stack has no room for a new stack frame, almost always caused by <strong>infinite recursion</strong> — a method calling itself (directly or indirectly) with no base case or with a base case that is never reached. It can also be triggered by deeply nested method calls on a very large call stack.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>// ❌ No base case — infinite recursion
int factorial(int n) {
    return n * factorial(n - 1);  // StackOverflowError
}

// ✓ Correct base case
int factorial(int n) {
    if (n <= 1) return 1;         // base case
    return n * factorial(n - 1);
}</code></pre>
              </div>`
          },
          // ── Q12
          {
            q:   'What is escape analysis and stack allocation?',
            tag: 'hard',
            body: `
              <p class="accordion-answer">
                <strong>Explanation:</strong> Escape analysis is a JIT optimisation that can eliminate heap allocation for short-lived objects.<br/><br/>
                <strong>Interview Answer:</strong> <strong>Escape analysis</strong> is a compiler technique (performed by the C2 JIT) that determines whether an object "escapes" the scope of a method or thread. If an object is created locally and never passed outside the method (does not escape), the JIT can:
                <br/>• <strong>Stack-allocate</strong> it — no GC pressure, very fast.
                <br/>• <strong>Scalar replace</strong> it — decompose the object into individual fields, further reducing overhead.
                <br/><br/>This means micro-optimising away <code>new</code> for small value objects is often unnecessary in modern JVMs — the JIT already does it.
              </p>`
          },
          // ── Q13
          {
            q:   'What is <code>OutOfMemoryError</code> and what are its common causes?',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Explanation:</strong> <code>OutOfMemoryError</code> (OOM) signals that the JVM cannot allocate more memory — a critical production concern.<br/><br/>
                <strong>Interview Answer:</strong> Common variants:
                <br/>• <strong>Java heap space</strong> — heap is full; application holds too many live objects or has a memory leak. Fix: increase <code>-Xmx</code>, fix leak.
                <br/>• <strong>GC overhead limit exceeded</strong> — JVM spends &gt;98% of time in GC but recovers &lt;2% of heap. Usually signals a leak.
                <br/>• <strong>Metaspace</strong> — too many classes loaded (e.g., class-generating frameworks, hot redeploy loops). Fix: <code>-XX:MaxMetaspaceSize</code>.
                <br/>• <strong>Unable to create new native thread</strong> — OS thread limit reached. Fix: reduce thread count or stack size (<code>-Xss</code>).
              </p>`
          },
          // ── Q14
          {
            q:   'How does <code>System.gc()</code> work and should you use it?',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Explanation:</strong> <code>System.gc()</code> is a hint, not a command — understanding this distinction matters for production code.<br/><br/>
                <strong>Interview Answer:</strong> <code>System.gc()</code> (and <code>Runtime.getRuntime().gc()</code>) <em>suggests</em> that the JVM run the garbage collector, but the JVM is free to ignore this request. In practice it often triggers a full GC, which can introduce a significant stop-the-world pause.
                <br/><br/><strong>Should you use it?</strong> Almost never. Explicit GC calls interfere with the JVM's own tuned GC scheduling and can harm throughput. Exceptions: benchmarking, testing, or before entering a performance-critical window where you want a clean heap. Can be disabled with <code>-XX:+DisableExplicitGC</code>.
              </p>`
          },
          // ── Q15
          {
            q:   'What are GC roots and why do they matter?',
            tag: 'hard',
            body: `
              <p class="accordion-answer">
                <strong>Explanation:</strong> GC roots are the starting points of the reachability analysis that determines which objects are alive.<br/><br/>
                <strong>Interview Answer:</strong> GC roots are the "anchors" from which the GC traverses the object graph. Any object reachable from a GC root is considered <em>live</em> and will not be collected. The main GC roots in Java are:
                <br/>• Local variables in currently executing method stack frames.
                <br/>• Static fields of loaded classes.
                <br/>• Active Java threads.
                <br/>• JNI references (objects passed to or returned from native code).
                <br/>• Objects held by synchronisation monitors.
                <br/><br/>This is why static collections are a common source of memory leaks — they are always reachable via a GC root (the class static field).
              </p>`
          }
        ]
      },
      // ════════════════════════════════════════
      //  DAY 5
      // ════════════════════════════════════════
      {
        id:     'day5',
        day:    5,
        title:  'Strings & Collections',
        topics: ['String Immutability', 'StringBuilder vs StringBuffer', 'HashMap Internals', 'HashMap vs Hashtable', 'HashSet vs TreeSet', 'Array vs ArrayList', 'Load Factor', 'Rehashing'],
        questions: [
          // ── Q1
          {
            q:   'Why is <code>String</code> immutable in Java and what are the benefits?',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Explanation:</strong> String immutability is a deliberate design decision with deep implications for security, performance, and thread safety.<br/><br/>
                <strong>Interview Answer:</strong> Once created, a <code>String</code> object's character data cannot change. Benefits:
                <br/>• <strong>String Pool</strong> — the JVM can safely share pooled String literals between callers because neither can mutate them.
                <br/>• <strong>HashMap key safety</strong> — the hash code is computed once and cached; a mutable key would corrupt the map after its hash changes.
                <br/>• <strong>Security</strong> — class names, hostnames, credentials cannot be altered after validation.
                <br/>• <strong>Thread safety</strong> — immutable objects need no synchronisation; they can be shared freely across threads.
                <br/><br/>Every "modification" (e.g., <code>toUpperCase()</code>, <code>concat()</code>) returns a <em>new</em> String object.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>String s = "hello";
s.toUpperCase();               // creates new String "HELLO"
System.out.println(s);         // still "hello" — s unchanged

String s2 = s.toUpperCase();   // capture the new String
System.out.println(s2);        // "HELLO"</code></pre>
              </div>`
          },
          // ── Q2
          {
            q:   'What is the difference between <code>String</code>, <code>StringBuilder</code>, and <code>StringBuffer</code>?',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Explanation:</strong> Three choices for string manipulation with different mutability and thread-safety characteristics.<br/><br/>
                <strong>Interview Answer:</strong>
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Text</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>Feature          String           StringBuilder    StringBuffer
-----------      -------------    -------------    -------------
Mutability       Immutable        Mutable          Mutable
Thread-safety    Yes (immutable)  No               Yes (synchronised)
Performance      Slowest (concat) Fastest          Slower (sync overhead)
Use case         Constants, keys  Single-thread    Multi-thread string ops</code></pre>
              </div>
              <p class="accordion-answer" style="margin-top:10px;">
                <strong>Rule:</strong> Use <code>String</code> for constants. Use <code>StringBuilder</code> in single-threaded loops. Only use <code>StringBuffer</code> if multiple threads truly share and mutate the same buffer — which is rare; prefer thread confinement instead.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>// ❌ Creates N intermediate String objects — O(n²)
String result = "";
for (String s : list) result += s;

// ✓ Mutates a single buffer — O(n)
StringBuilder sb = new StringBuilder();
for (String s : list) sb.append(s);
String result = sb.toString();</code></pre>
              </div>`
          },
          // ── Q3
          {
            q:   'How does <code>HashMap</code> work internally?',
            tag: 'hard',
            body: `
              <p class="accordion-answer">
                <strong>Explanation:</strong> <code>HashMap</code> is the most commonly asked collection internals question.<br/><br/>
                <strong>Interview Answer:</strong> <code>HashMap</code> is backed by an array of <code>Node&lt;K,V&gt;[]</code> called <em>buckets</em>. On <code>put(key, value)</code>:
                <br/>1. Compute <code>hash = HashMap.hash(key.hashCode())</code> — XORs high bits to spread distribution.
                <br/>2. Calculate bucket index: <code>index = hash &amp; (capacity - 1)</code>.
                <br/>3. If bucket is empty → insert a new <code>Node</code>.
                <br/>4. If bucket has entries (collision) → walk the linked list; update if key matches, else append.
                <br/>5. <strong>Java 8+:</strong> when a bucket's linked list exceeds <code>TREEIFY_THRESHOLD</code> (8), it converts to a red-black tree for O(log n) lookup instead of O(n).
                <br/>6. When <code>size &gt; capacity × loadFactor</code>, the map rehashes into a doubled array.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>// hashCode + equals contract:
// If a.equals(b) → a.hashCode() == b.hashCode()  (REQUIRED)
// If a.hashCode() == b.hashCode() → a.equals(b) may be false (collision)

// Always override both together
@Override public boolean equals(Object o) { … }
@Override public int hashCode() { … }</code></pre>
              </div>`
          },
          // ── Q4
          {
            q:   'What is the difference between <code>HashMap</code> and <code>Hashtable</code>?',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Explanation:</strong> <code>Hashtable</code> is the legacy predecessor — understanding the differences helps in modernising old codebases.<br/><br/>
                <strong>Interview Answer:</strong>
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Text</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>Feature          HashMap                   Hashtable
-----------      ----------------------    ----------------------
Thread-safety    No                        Yes (method-level sync)
Null keys        1 null key allowed        ❌ NullPointerException
Null values      Multiple nulls allowed    ❌ NullPointerException
Performance      Faster                    Slower (sync overhead)
Iterator         Fail-fast                 Fail-safe (Enumerator)
Introduced       Java 2 (Collections fw)   Java 1.0 (legacy)</code></pre>
              </div>
              <p class="accordion-answer" style="margin-top:10px;">
                <strong>Prefer:</strong> <code>HashMap</code> for single-threaded code; <code>ConcurrentHashMap</code> for thread-safe concurrent access (segment/bucket-level locking, far more scalable than <code>Hashtable</code>).
              </p>`
          },
          // ── Q5
          {
            q:   'What is the difference between <code>HashSet</code> and <code>TreeSet</code>?',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Explanation:</strong> Both implement <code>Set</code> (no duplicates) but differ in ordering and performance.<br/><br/>
                <strong>Interview Answer:</strong>
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Text</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>Feature         HashSet              TreeSet
-----------     ----------------     --------------------------
Ordering        No guaranteed order  Sorted (natural / Comparator)
Nulls           1 null allowed       ❌ NullPointerException (Java 7+)
add/remove      O(1) average         O(log n)
contains        O(1) average         O(log n)
Backed by       HashMap              TreeMap (Red-Black tree)
Use case        Fast membership test Sorted unique elements, range ops</code></pre>
              </div>
              <p class="accordion-answer" style="margin-top:10px;">
                <code>LinkedHashSet</code> is a third option — insertion-order preserving with O(1) operations.
              </p>`
          },
          // ── Q6
          {
            q:   'What is the difference between an Array and an <code>ArrayList</code>?',
            tag: 'easy',
            body: `
              <p class="accordion-answer">
                <strong>Explanation:</strong> Arrays are a language primitive; <code>ArrayList</code> is a resizable wrapper from the Collections framework.<br/><br/>
                <strong>Interview Answer:</strong>
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Text</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>Feature          Array                  ArrayList
-----------      -------------------    -------------------
Size             Fixed at creation      Dynamic (auto-grow)
Type             Primitives + objects   Objects only (use wrappers)
Generics         No                     Yes
Performance      Slightly faster        Slightly slower (boxing)
Length           array.length           list.size()
API              None                   add, remove, contains…</code></pre>
              </div>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>// Array — fixed size
int[] arr = new int[5];

// ArrayList — grows automatically
List&lt;Integer&gt; list = new ArrayList&lt;&gt;();
list.add(1); list.add(2); // no size limit concern

// Convert between them
List&lt;String&gt; fromArray = Arrays.asList("a", "b", "c");
String[] fromList = list.stream().map(String::valueOf)
                        .toArray(String[]::new);</code></pre>
              </div>`
          },
          // ── Q7
          {
            q:   'What is the load factor in <code>HashMap</code> and why does it matter?',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Explanation:</strong> The load factor controls the trade-off between memory usage and lookup performance.<br/><br/>
                <strong>Interview Answer:</strong> The <strong>load factor</strong> (default <code>0.75</code>) defines the maximum ratio of entries to bucket capacity before a <em>rehash</em> occurs.
                <br/><br/>Formula: <code>rehash when size &gt; capacity × loadFactor</code>
                <br/><br/>• <strong>Low load factor</strong> (e.g., 0.25) — fewer collisions, faster lookups, but higher memory usage and more frequent rehashing.
                <br/>• <strong>High load factor</strong> (e.g., 1.0) — more collisions, slower lookups (longer bucket chains), but memory-efficient.
                <br/><br/>The default <code>0.75</code> is a well-tested balance. Set the <em>initial capacity</em> appropriately when the map size is known in advance to avoid rehashing overhead.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>// Avoid rehashing when you know the expected size
int expectedSize = 1000;
// capacity = expectedSize / loadFactor + 1
Map&lt;String, String&gt; map = new HashMap&lt;&gt;(1334, 0.75f);</code></pre>
              </div>`
          },
          // ── Q8
          {
            q:   'What is rehashing in <code>HashMap</code>?',
            tag: 'hard',
            body: `
              <p class="accordion-answer">
                <strong>Explanation:</strong> Rehashing is the most expensive single operation in a <code>HashMap</code>'s lifecycle.<br/><br/>
                <strong>Interview Answer:</strong> When <code>size</code> exceeds <code>capacity × loadFactor</code>, the <code>HashMap</code>:
                <br/>1. Creates a new internal array with <strong>double the capacity</strong>.
                <br/>2. Iterates all existing <code>Node</code>s.
                <br/>3. Recomputes each key's bucket index (<code>hash &amp; (newCapacity - 1)</code>) and places it in the new array.
                <br/><br/>This is an O(n) operation. In Java 8+, linked-list nodes in a bucket are split into "lo" and "hi" chains using a bit-trick (<code>hash &amp; oldCapacity</code>), avoiding full recomputation. Always specify the initial capacity when the size is predictable to minimise rehashes.
              </p>`
          },
          // ── Q9
          {
            q:   'What is the contract between <code>hashCode()</code> and <code>equals()</code>?',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Explanation:</strong> Violating this contract breaks all hash-based collections silently — a classic interview trap.<br/><br/>
                <strong>Interview Answer:</strong> The contract (defined in <code>java.lang.Object</code>) states:
                <br/>1. If <code>a.equals(b)</code> is <code>true</code>, then <code>a.hashCode() == b.hashCode()</code> <strong>must</strong> be true.
                <br/>2. The converse is <em>not</em> required: equal hash codes do not imply equal objects (collisions are allowed).
                <br/>3. If an object is used in a hash-based collection, its <code>hashCode()</code> must remain stable (not change while in the collection).
                <br/><br/>Always override <strong>both</strong> methods together. IDEs and <code>java.util.Objects.hash()</code> / <code>record</code> types generate them automatically.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>record Point(int x, int y) {}   // Java 16+ — equals + hashCode auto-generated

// Manual — using Objects.hash
@Override public boolean equals(Object o) {
    if (this == o) return true;
    if (!(o instanceof Point)) return false;
    Point p = (Point) o;
    return x == p.x &amp;&amp; y == p.y;
}
@Override public int hashCode() { return Objects.hash(x, y); }</code></pre>
              </div>`
          },
          // ── Q10
          {
            q:   'What is the difference between <code>Iterator</code> and <code>ListIterator</code>?',
            tag: 'easy',
            body: `
              <p class="accordion-answer">
                <strong>Explanation:</strong> Both are cursors for traversing collections, but with different capabilities.<br/><br/>
                <strong>Interview Answer:</strong>
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Text</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>Feature          Iterator         ListIterator
-----------      -------------    -------------------------
Direction        Forward only     Forward and backward
Add elements     No               Yes (add())
Replace element  No               Yes (set())
Works with       Any Collection   List only
Index access     No               nextIndex() / previousIndex()</code></pre>
              </div>`
          },
          // ── Q11
          {
            q:   'What is a fail-fast iterator and how does it work?',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Explanation:</strong> Fail-fast iterators protect against inconsistent state during concurrent modification.<br/><br/>
                <strong>Interview Answer:</strong> A fail-fast iterator (e.g., <code>ArrayList</code>, <code>HashMap</code>) tracks a <code>modCount</code> field on the collection. Every structural modification (add, remove, resize) increments <code>modCount</code>. The iterator remembers the <code>modCount</code> at creation time (<code>expectedModCount</code>). On each <code>next()</code> call it checks <code>modCount == expectedModCount</code>; if they differ, it throws <code>ConcurrentModificationException</code>.
                <br/><br/>Note: this is a best-effort mechanism, not a guarantee. Use <code>ConcurrentHashMap</code> or <code>CopyOnWriteArrayList</code> for safe concurrent iteration.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>List&lt;String&gt; list = new ArrayList&lt;&gt;(List.of("a","b","c"));

// ❌ ConcurrentModificationException
for (String s : list) {
    if (s.equals("b")) list.remove(s);
}

// ✓ Use iterator's own remove
Iterator&lt;String&gt; it = list.iterator();
while (it.hasNext()) {
    if (it.next().equals("b")) it.remove();
}</code></pre>
              </div>`
          },
          // ── Q12
          {
            q:   'What is the difference between <code>Comparable</code> and <code>Comparator</code>?',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Explanation:</strong> Two strategies for defining ordering — one built-in to the class, one external and reusable.<br/><br/>
                <strong>Interview Answer:</strong>
                <br/>• <code>Comparable&lt;T&gt;</code> — the class implements <code>compareTo(T)</code>; it defines the object's <em>natural ordering</em>. Can only define one ordering. Used by <code>Collections.sort()</code> and sorted collections by default.
                <br/>• <code>Comparator&lt;T&gt;</code> — an external strategy object with a <code>compare(T a, T b)</code> method. Multiple comparators can be defined for different sort criteria. Passed explicitly to <code>Collections.sort(list, comparator)</code> or <code>TreeSet</code>/<code>TreeMap</code>.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>// Comparable — natural order by name
class Employee implements Comparable&lt;Employee&gt; {
    String name; int salary;
    @Override public int compareTo(Employee o) { return name.compareTo(o.name); }
}

// Comparator — external, multiple orderings
Comparator&lt;Employee&gt; bySalary = Comparator.comparingInt(e -&gt; e.salary);
Comparator&lt;Employee&gt; byName   = Comparator.comparing(e -&gt; e.name);

employees.sort(bySalary.thenComparing(byName));</code></pre>
              </div>`
          },
          // ── Q13
          {
            q:   'What is <code>LinkedHashMap</code> and when would you use it?',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Explanation:</strong> <code>LinkedHashMap</code> gives you HashMap performance with predictable iteration order.<br/><br/>
                <strong>Interview Answer:</strong> <code>LinkedHashMap</code> extends <code>HashMap</code> and additionally maintains a doubly-linked list of entries in <strong>insertion order</strong> (or <em>access order</em> if constructed with <code>accessOrder=true</code>). This makes iteration order predictable — entries come out in the order they were inserted.
                <br/><br/><strong>Use cases:</strong>
                <br/>• Building a simple LRU cache (access-order mode + override <code>removeEldestEntry()</code>).
                <br/>• Any scenario requiring a map that preserves insertion order (e.g., serialising a JSON object with stable key order).
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>// LRU cache with capacity 100
Map&lt;String, String&gt; lruCache = new LinkedHashMap&lt;&gt;(128, 0.75f, true) {
    @Override
    protected boolean removeEldestEntry(Map.Entry&lt;String, String&gt; eldest) {
        return size() &gt; 100;
    }
};</code></pre>
              </div>`
          },
          // ── Q14
          {
            q:   'What is <code>ConcurrentHashMap</code> and how does it differ from <code>HashMap</code>?',
            tag: 'hard',
            body: `
              <p class="accordion-answer">
                <strong>Explanation:</strong> The go-to thread-safe map for high-concurrency scenarios.<br/><br/>
                <strong>Interview Answer:</strong> <code>ConcurrentHashMap</code> is a thread-safe, high-concurrency alternative to <code>HashMap</code>:
                <br/>• <strong>Java 7:</strong> divided into 16 segments (Segment-level locking); allows 16 concurrent writers.
                <br/>• <strong>Java 8+:</strong> bucket-level CAS (Compare-And-Swap) + synchronised only on the first node of each bucket. Near <code>HashMap</code> read performance with safe concurrent writes.
                <br/>• Does <strong>not</strong> allow <code>null</code> keys or values (unlike <code>HashMap</code>).
                <br/>• Iteration is <em>weakly consistent</em> (no <code>ConcurrentModificationException</code>; may not reflect very recent mutations).
                <br/>• <code>computeIfAbsent</code>, <code>merge</code>, <code>getOrDefault</code> are atomic operations.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>ConcurrentHashMap&lt;String, Integer&gt; wordCount = new ConcurrentHashMap&lt;&gt;();

// Atomic increment — no external sync needed
wordCount.merge("hello", 1, Integer::sum);

// Atomic putIfAbsent equivalent but with lazy computation
wordCount.computeIfAbsent("world", k -&gt; expensiveCompute(k));</code></pre>
              </div>`
          },
          // ── Q15
          {
            q:   'What are the differences between <code>List</code>, <code>Set</code>, and <code>Map</code>?',
            tag: 'easy',
            body: `
              <p class="accordion-answer">
                <strong>Explanation:</strong> The three core Collection interfaces represent fundamentally different data organisation strategies.<br/><br/>
                <strong>Interview Answer:</strong>
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Text</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>Interface  Duplicates  Ordered  Key-Value  Main Impl
---------  ----------  -------  ---------  ---------------------------------
List       Yes         Yes      No         ArrayList, LinkedList, Vector
Set        No          Varies   No         HashSet, LinkedHashSet, TreeSet
Map        Keys: No    Varies   Yes        HashMap, LinkedHashMap, TreeMap</code></pre>
              </div>
              <p class="accordion-answer" style="margin-top:10px;">
                <strong>Queue</strong> and <strong>Deque</strong> are two additional interfaces for FIFO/LIFO access patterns (<code>ArrayDeque</code>, <code>PriorityQueue</code>).
              </p>`
          }
        ]
      },
      // ════════════════════════════════════════
      //  DAY 6
      // ════════════════════════════════════════
      {
        id:     'day6',
        day:    6,
        title:  'Java 8',
        topics: ['Lambda Expressions', 'Functional Interfaces', 'Stream API', 'map vs filter vs collect', 'Optional', 'Method References', 'Parallel Streams'],
        questions: [
          // ── Q1
          {
            q:   'What is a lambda expression and what problem does it solve?',
            tag: 'easy',
            body: `
              <p class="accordion-answer">
                <strong>Explanation:</strong> Lambdas enable functional-style programming by treating behaviour as data.<br/><br/>
                <strong>Interview Answer:</strong> A lambda expression is an anonymous function with the syntax <code>(parameters) -&gt; body</code>. It is a concise way to implement a <strong>functional interface</strong> (an interface with exactly one abstract method). Before Java 8, you had to write a verbose anonymous inner class. Lambdas:
                <br/>• Eliminate boilerplate.
                <br/>• Allow methods to receive <em>behaviour</em> as arguments.
                <br/>• Enable the Streams API and functional patterns.
                <br/><br/>Lambda syntax forms: <code>() -&gt; expr</code>, <code>x -&gt; expr</code>, <code>(x, y) -&gt; { stmt; return val; }</code>
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>// Anonymous inner class
Runnable r1 = new Runnable() {
    @Override public void run() { System.out.println("Hello"); }
};

// Lambda
Runnable r2 = () -&gt; System.out.println("Hello");

// Comparator lambda
List&lt;String&gt; names = Arrays.asList("Charlie", "Alice", "Bob");
names.sort((a, b) -&gt; a.compareTo(b));  // or: Comparator.naturalOrder()</code></pre>
              </div>`
          },
          // ── Q2
          {
            q:   'What is a functional interface? Name the key built-in ones.',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Explanation:</strong> Functional interfaces are the type system foundation that makes lambdas possible.<br/><br/>
                <strong>Interview Answer:</strong> A functional interface has <strong>exactly one abstract method</strong> (SAM — Single Abstract Method). It may also contain default and static methods. Annotated with <code>@FunctionalInterface</code> (optional but recommended — the compiler enforces the SAM rule). Key built-ins in <code>java.util.function</code>:
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Text</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>Interface          Signature              Use case
--------------     -------------------    --------------------------
Supplier&lt;T&gt;       T get()                Produce a value (lazy init)
Consumer&lt;T&gt;       void accept(T)         Consume a value (forEach)
Function&lt;T,R&gt;     R apply(T)             Transform T → R (map)
Predicate&lt;T&gt;      boolean test(T)        Test / filter
BiFunction&lt;T,U,R&gt; R apply(T, U)          Two inputs, one output
UnaryOperator&lt;T&gt;  T apply(T)             Same type in/out
BinaryOperator&lt;T&gt; T apply(T, T)          Two same-type inputs → same type</code></pre>
              </div>`
          },
          // ── Q3
          {
            q:   'Explain the Stream API — what is a stream and what are its characteristics?',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Explanation:</strong> Streams provide a declarative, pipeline-based approach to processing sequences of elements.<br/><br/>
                <strong>Interview Answer:</strong> A <code>Stream&lt;T&gt;</code> is a <em>pipeline</em> that processes a sequence of elements on demand. Key characteristics:
                <br/>• <strong>Not a data structure</strong> — it doesn't store data; it processes it.
                <br/>• <strong>Lazy</strong> — intermediate operations are not executed until a terminal operation is invoked.
                <br/>• <strong>Single-use</strong> — a stream can only be consumed once; reuse the source to create a new stream.
                <br/>• <strong>Functional</strong> — operations don't mutate the source.
                <br/><br/>Pipeline structure: <strong>Source → Intermediate ops (lazy) → Terminal op (triggers execution)</strong>
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>List&lt;Integer&gt; numbers = List.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);

int sumOfEvenSquares = numbers.stream()         // source
    .filter(n -&gt; n % 2 == 0)                    // intermediate (lazy)
    .map(n -&gt; n * n)                            // intermediate (lazy)
    .reduce(0, Integer::sum);                    // terminal (triggers all)

System.out.println(sumOfEvenSquares);  // 220</code></pre>
              </div>`
          },
          // ── Q4
          {
            q:   'What is the difference between <code>map()</code>, <code>filter()</code>, and <code>flatMap()</code>?',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Explanation:</strong> These three intermediate operations form the core of stream data transformation.<br/><br/>
                <strong>Interview Answer:</strong>
                <br/>• <code>filter(Predicate)</code> — keeps only elements for which the predicate returns <code>true</code>. One element in → zero or one out.
                <br/>• <code>map(Function)</code> — transforms each element to another type/value. One element in → exactly one out.
                <br/>• <code>flatMap(Function&lt;T, Stream&lt;R&gt;&gt;)</code> — maps each element to a Stream, then <em>flattens</em> all those streams into one. One element in → zero or more out. Essential for nested collections.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>List&lt;String&gt; words = List.of("Hello World", "Java 8");

// map — each String → its length
words.stream().map(String::length).forEach(System.out::println);
// 11, 6

// filter — keep only long strings
words.stream().filter(s -&gt; s.length() &gt; 6).forEach(System.out::println);
// "Hello World"

// flatMap — split each sentence into words, flatten to one stream
words.stream()
     .flatMap(s -&gt; Arrays.stream(s.split(" ")))
     .forEach(System.out::println);
// Hello, World, Java, 8</code></pre>
              </div>`
          },
          // ── Q5
          {
            q:   'What does <code>collect()</code> do and what are common collectors?',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Explanation:</strong> <code>collect()</code> is the most versatile terminal operation — it accumulates stream elements into a result container.<br/><br/>
                <strong>Interview Answer:</strong> <code>collect(Collector)</code> is a mutable reduction terminal operation. The <code>Collectors</code> utility class provides ready-made collectors:
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>List&lt;Employee&gt; emps = getEmployees();

// toList / toSet / toMap
List&lt;String&gt; names   = emps.stream().map(Employee::getName).collect(Collectors.toList());
Set&lt;String&gt;  depts   = emps.stream().map(Employee::getDept).collect(Collectors.toSet());

// groupingBy — Map&lt;dept, List&lt;Employee&gt;&gt;
Map&lt;String, List&lt;Employee&gt;&gt; byDept =
    emps.stream().collect(Collectors.groupingBy(Employee::getDept));

// counting per group
Map&lt;String, Long&gt; countByDept =
    emps.stream().collect(Collectors.groupingBy(Employee::getDept, Collectors.counting()));

// joining
String csv = names.stream().collect(Collectors.joining(", "));</code></pre>
              </div>`
          },
          // ── Q6
          {
            q:   'What is <code>Optional</code> and how should it be used correctly?',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Explanation:</strong> <code>Optional</code> makes absent values explicit in the API, replacing null-check boilerplate.<br/><br/>
                <strong>Interview Answer:</strong> <code>Optional&lt;T&gt;</code> is a container that either holds a non-null value or is empty. It is designed as a <em>return type</em> to signal that a method may not find a result, forcing the caller to handle both cases.
                <br/><br/><strong>Do:</strong> return <code>Optional</code> from repository/search methods.<br/>
                <strong>Don't:</strong> use it as a field type, method parameter, or in collections (use <code>null</code>-safe alternatives instead). Don't call <code>get()</code> without checking — that defeats the purpose.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>Optional&lt;User&gt; userOpt = userRepo.findById(id);

// ❌ Defeats the purpose
User u = userOpt.get();  // throws NoSuchElementException if empty

// ✓ Safe alternatives
userOpt.ifPresent(u -&gt; process(u));
User u = userOpt.orElse(User.guest());
User u = userOpt.orElseGet(() -&gt; createDefaultUser());
User u = userOpt.orElseThrow(() -&gt; new UserNotFoundException(id));

// Chaining — map + orElse
String name = userOpt.map(User::getName).orElse("Anonymous");</code></pre>
              </div>`
          },
          // ── Q7
          {
            q:   'What are method references and what are the four types?',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Explanation:</strong> Method references are a shorthand for lambdas that simply call an existing method.<br/><br/>
                <strong>Interview Answer:</strong> Method references use the <code>::</code> operator and come in four forms:
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Text</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>Type                        Syntax                   Lambda equivalent
--------------------------  -----------------------  -------------------------
Static method               ClassName::staticMethod  x -&gt; ClassName.method(x)
Instance (bound)            instance::method         x -&gt; obj.method(x)
Instance (unbound)          ClassName::method        (obj, x) -&gt; obj.method(x)
Constructor                 ClassName::new           args -&gt; new ClassName(args)</code></pre>
              </div>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>// Static method ref
list.stream().map(Integer::parseInt).collect(toList());

// Unbound instance method ref
list.stream().map(String::toUpperCase).collect(toList());

// Bound instance method ref
String prefix = "Hello";
list.stream().filter(prefix::startsWith).collect(toList());

// Constructor ref
list.stream().map(Person::new).collect(toList());</code></pre>
              </div>`
          },
          // ── Q8
          {
            q:   'What are parallel streams and when should you use them?',
            tag: 'hard',
            body: `
              <p class="accordion-answer">
                <strong>Explanation:</strong> Parallel streams can speed up CPU-bound work but introduce overhead that makes them slower for small or I/O-bound tasks.<br/><br/>
                <strong>Interview Answer:</strong> Calling <code>.parallelStream()</code> or <code>stream().parallel()</code> splits the data using the <strong>Fork/Join framework</strong> (common pool with <code>Runtime.availableProcessors() - 1</code> threads) and processes sub-tasks concurrently.
                <br/><br/><strong>Use when:</strong>
                <br/>• Large data sets (thousands+ of elements).
                <br/>• Stateless, associative, CPU-bound operations.
                <br/><br/><strong>Avoid when:</strong>
                <br/>• Small collections (fork/join overhead dominates).
                <br/>• I/O-bound operations (threads block; no CPU gain).
                <br/>• Operations with shared mutable state (race conditions).
                <br/>• Operations with ordering requirements (e.g., <code>forEachOrdered</code> kills parallelism benefit).
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>// ✓ Good candidate — large CPU-bound reduction
long sum = LongStream.rangeClosed(1, 10_000_000)
    .parallel()
    .sum();

// ❌ Bad — shared mutable state causes race conditions
List&lt;String&gt; result = new ArrayList&lt;&gt;();
stream.parallel().forEach(result::add);  // not thread-safe

// ✓ Fix — collect thread-safely
List&lt;String&gt; result = stream.parallel().collect(Collectors.toList());</code></pre>
              </div>`
          },
          // ── Q9
          {
            q:   'What is the difference between <code>findFirst()</code> and <code>findAny()</code>?',
            tag: 'easy',
            body: `
              <p class="accordion-answer">
                <strong>Explanation:</strong> Both return an <code>Optional</code> element but differ in ordering guarantees.<br/><br/>
                <strong>Interview Answer:</strong>
                <br/>• <code>findFirst()</code> — returns the <em>first</em> element in encounter order (deterministic). Works in both sequential and parallel streams, but in parallel it must coordinate across threads to honour order.
                <br/>• <code>findAny()</code> — returns <em>any</em> matching element (non-deterministic). In a sequential stream it usually returns the first; in a parallel stream it returns whichever sub-task finishes first. Prefer <code>findAny()</code> in parallel pipelines for better performance when order doesn't matter.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>Optional&lt;String&gt; first = names.stream()
    .filter(n -&gt; n.startsWith("A"))
    .findFirst();   // always the earliest in list order

Optional&lt;String&gt; any = names.parallelStream()
    .filter(n -&gt; n.startsWith("A"))
    .findAny();     // fastest result, unspecified which one</code></pre>
              </div>`
          },
          // ── Q10
          {
            q:   'What is <code>reduce()</code> and how does it work?',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Explanation:</strong> <code>reduce()</code> is a general-purpose fold operation that combines stream elements into a single value.<br/><br/>
                <strong>Interview Answer:</strong> <code>reduce(identity, BinaryOperator)</code> combines all elements using an associative function starting from an identity value. Variants:
                <br/>• <code>reduce(identity, accumulator)</code> — returns <code>T</code>.
                <br/>• <code>reduce(accumulator)</code> — returns <code>Optional&lt;T&gt;</code> (stream may be empty).
                <br/>• <code>reduce(identity, accumulator, combiner)</code> — for parallel streams with type change.
                <br/><br/><strong>Important:</strong> the accumulator must be <em>associative</em> and <em>stateless</em> for correct parallel results.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>// Sum
int sum = Stream.of(1, 2, 3, 4, 5).reduce(0, Integer::sum); // 15

// Max using reduce
Optional&lt;Integer&gt; max = Stream.of(3, 1, 4, 1, 5).reduce(Integer::max);

// String concatenation (illustrative — use joining() in practice)
String joined = Stream.of("a", "b", "c").reduce("", (a, b) -&gt; a + b); // "abc"</code></pre>
              </div>`
          },
          // ── Q11
          {
            q:   'What are default methods in interfaces and why were they introduced?',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Explanation:</strong> Default methods were introduced in Java 8 primarily to enable backward-compatible evolution of the Collections API.<br/><br/>
                <strong>Interview Answer:</strong> A <strong>default method</strong> is a method in an interface with a body, declared with the <code>default</code> keyword. It provides a default implementation that implementing classes can optionally override.
                <br/><br/><strong>Why introduced:</strong> Adding the <code>stream()</code> and <code>forEach()</code> methods to the existing <code>Collection</code> interface would have broken every existing implementing class. Default methods allow the interface to evolve without breaking existing implementations.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>interface Greeter {
    String getName();   // abstract

    default void greet() {           // default — can be overridden
        System.out.println("Hello, " + getName());
    }

    static Greeter of(String name) { // static — not inherited
        return () -&gt; name;
    }
}

class FormalGreeter implements Greeter {
    public String getName() { return "Sir/Madam"; }
    @Override public void greet() { System.out.println("Good day, " + getName()); }
}</code></pre>
              </div>`
          },
          // ── Q12
          {
            q:   'What is a <code>Predicate</code> and how can predicates be composed?',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Explanation:</strong> <code>Predicate</code> is the functional interface for boolean-valued tests — composable via logical operators.<br/><br/>
                <strong>Interview Answer:</strong> <code>Predicate&lt;T&gt;</code> has one abstract method: <code>boolean test(T t)</code>. It provides default methods for composition:
                <br/>• <code>and(Predicate)</code> — logical AND (short-circuit).
                <br/>• <code>or(Predicate)</code> — logical OR (short-circuit).
                <br/>• <code>negate()</code> — logical NOT.
                <br/>• <code>Predicate.not(p)</code> — static negation (Java 11+).
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>Predicate&lt;Integer&gt; isEven     = n -&gt; n % 2 == 0;
Predicate&lt;Integer&gt; isPositive = n -&gt; n &gt; 0;
Predicate&lt;Integer&gt; isEvenAndPositive = isEven.and(isPositive);

List.of(-4, -1, 0, 2, 3, 6).stream()
    .filter(isEvenAndPositive)
    .forEach(System.out::println);  // 2, 6

// Negate
List.of("hello", "", "world", "").stream()
    .filter(Predicate.not(String::isEmpty))
    .forEach(System.out::println);  // hello, world</code></pre>
              </div>`
          },
          // ── Q13
          {
            q:   'What is lazy evaluation in streams and why does it matter?',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Explanation:</strong> Lazy evaluation can avoid unnecessary work and enables processing of infinite streams.<br/><br/>
                <strong>Interview Answer:</strong> Intermediate stream operations are <strong>lazy</strong> — they build a pipeline description but execute nothing until a terminal operation is called. When the terminal operation runs, the JVM fuses the pipeline and processes each element through the entire chain before moving to the next element (vertical execution, not horizontal).
                <br/><br/>Benefits:
                <br/>• <strong>Short-circuiting</strong> — operations like <code>findFirst()</code>, <code>anyMatch()</code>, <code>limit()</code> stop as soon as the result is determined.
                <br/>• <strong>Infinite streams</strong> — possible because elements are generated on demand.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>// Infinite stream — lazy + limit = safe
Stream.iterate(0, n -&gt; n + 1)
    .filter(n -&gt; n % 2 == 0)
    .limit(5)
    .forEach(System.out::println);  // 0 2 4 6 8

// Short-circuit: stops after first match
Optional&lt;String&gt; first = names.stream()
    .filter(n -&gt; n.startsWith("Z"))
    .findFirst();  // doesn't iterate the whole list if found early</code></pre>
              </div>`
          },
          // ── Q14
          {
            q:   'What are <code>IntStream</code>, <code>LongStream</code>, and <code>DoubleStream</code>?',
            tag: 'easy',
            body: `
              <p class="accordion-answer">
                <strong>Explanation:</strong> Primitive specialised streams avoid autoboxing overhead for numeric operations.<br/><br/>
                <strong>Interview Answer:</strong> <code>IntStream</code>, <code>LongStream</code>, and <code>DoubleStream</code> are specialised variants of <code>Stream</code> that work directly with primitive types (no boxing/unboxing). They provide extra methods not available on <code>Stream&lt;T&gt;</code>:
                <br/>• <code>sum()</code>, <code>average()</code>, <code>min()</code>, <code>max()</code>, <code>summaryStatistics()</code>
                <br/>• <code>range(start, end)</code> / <code>rangeClosed(start, end)</code>
                <br/><br/>Convert between object and primitive streams with <code>mapToInt()</code>, <code>boxed()</code>, <code>asLongStream()</code>.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>// Range
IntStream.range(1, 6).forEach(System.out::println);  // 1 2 3 4 5

// Statistics
IntSummaryStatistics stats = IntStream.of(3, 1, 4, 1, 5, 9)
    .summaryStatistics();
System.out.println(stats.getAverage()); // 3.833…
System.out.println(stats.getMax());     // 9

// mapToInt from object stream
int totalSalary = employees.stream()
    .mapToInt(Employee::getSalary)
    .sum();</code></pre>
              </div>`
          },
          // ── Q15
          {
            q:   'What new features did Java 8 introduce beyond lambdas and streams?',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Explanation:</strong> Java 8 was the largest language release since Java 5 — interviewers often ask about the full scope of changes.<br/><br/>
                <strong>Interview Answer:</strong> Key Java 8 additions:
                <br/>• <strong>Lambda expressions &amp; method references</strong> — functional programming support.
                <br/>• <strong>Stream API</strong> — declarative bulk data processing.
                <br/>• <strong>Optional&lt;T&gt;</strong> — null-safe value containers.
                <br/>• <strong>Default &amp; static interface methods</strong> — interface evolution.
                <br/>• <strong>New Date/Time API</strong> (<code>java.time</code>) — immutable, thread-safe replacement for <code>Date</code>/<code>Calendar</code> (inspired by Joda-Time).
                <br/>• <strong>Nashorn JavaScript engine</strong> — embed JS in Java (deprecated Java 11).
                <br/>• <strong>CompletableFuture</strong> — composable async programming.
                <br/>• <strong>Metaspace</strong> — replaces PermGen.
                <br/>• <strong>Base64</strong> encoding in standard library.
                <br/>• <strong>forEach / removeIf / replaceAll / sort</strong> on collections.
              </p>`
          }
        ]
      },
      // ════════════════════════════════════════
      //  DAY 7
      // ════════════════════════════════════════
      {
        id:     'day7',
        day:    7,
        title:  'Multithreading & Exceptions',
        topics: ['Process vs Thread', 'Thread Lifecycle', 'synchronized', 'volatile', 'wait/notify', 'ExecutorService', 'Deadlock', 'CompletableFuture'],
        questions: [
          // ── Q1
          {
            q:   'What is the difference between a Process and a Thread?',
            tag: 'easy',
            body: `
              <p class="accordion-answer">
                <strong>Explanation:</strong> This is the foundational concept before diving into multithreading.<br/><br/>
                <strong>Interview Answer:</strong>
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Text</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>Feature          Process                    Thread
-----------      -------------------------  ---------------------------
Definition       Standalone program in exec Unit of execution within a process
Memory           Own independent memory     Shares process memory (heap)
Communication    IPC (pipes, sockets)       Direct shared memory (needs sync)
Overhead         Heavy (OS scheduling)      Lightweight
Crash impact     Isolated                   Can crash the whole process
Example          Chrome tab, Java process   HTTP request handler, GC thread</code></pre>
              </div>
              <p class="accordion-answer" style="margin-top:10px;">Every Java application has at least two threads: the <strong>main</strong> thread and the <strong>GC</strong> thread.</p>`
          },
          // ── Q2
          {
            q:   'What are the states in the Java Thread lifecycle?',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Explanation:</strong> Threads move through well-defined states managed by the JVM and OS scheduler.<br/><br/>
                <strong>Interview Answer:</strong>
                <br/>• <strong>NEW</strong> — object created, <code>start()</code> not called yet.
                <br/>• <strong>RUNNABLE</strong> — running on CPU or waiting in the run queue for a CPU slot.
                <br/>• <strong>BLOCKED</strong> — waiting to acquire a <code>synchronized</code> monitor held by another thread.
                <br/>• <strong>WAITING</strong> — indefinitely paused (<code>Object.wait()</code>, <code>Thread.join()</code> with no timeout, <code>LockSupport.park()</code>).
                <br/>• <strong>TIMED_WAITING</strong> — paused for a specific duration (<code>Thread.sleep(ms)</code>, <code>wait(ms)</code>, <code>join(ms)</code>).
                <br/>• <strong>TERMINATED</strong> — <code>run()</code> completed or an uncaught exception killed the thread.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>Thread t = new Thread(() -&gt; { /* work */ });
System.out.println(t.getState()); // NEW
t.start();
System.out.println(t.getState()); // RUNNABLE (or TERMINATED if fast)
t.join();
System.out.println(t.getState()); // TERMINATED</code></pre>
              </div>`
          },
          // ── Q3
          {
            q:   'What are the two ways to create a thread in Java?',
            tag: 'easy',
            body: `
              <p class="accordion-answer">
                <strong>Explanation:</strong> A classic basics question — also tests awareness of why one approach is preferred.<br/><br/>
                <strong>Interview Answer:</strong>
                <br/>1. <strong>Extend <code>Thread</code></strong> — override <code>run()</code>. Drawback: the class cannot extend any other class (single inheritance).
                <br/>2. <strong>Implement <code>Runnable</code></strong> — pass to <code>new Thread(runnable)</code>. Preferred because it separates the task from the thread mechanism and allows the class to extend another class.
                <br/><br/>In modern Java, prefer <strong>ExecutorService</strong> over raw threads to manage pooling and lifecycle.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>// 1. Extend Thread
class MyThread extends Thread {
    @Override public void run() { System.out.println("Thread: " + getName()); }
}
new MyThread().start();

// 2. Implement Runnable (preferred)
Runnable task = () -&gt; System.out.println("Runnable thread");
new Thread(task).start();

// 3. Modern — ExecutorService
ExecutorService pool = Executors.newFixedThreadPool(4);
pool.submit(() -&gt; System.out.println("Pool thread"));</code></pre>
              </div>`
          },
          // ── Q4
          {
            q:   'What is the <code>synchronized</code> keyword and how does it work?',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Explanation:</strong> <code>synchronized</code> is Java's built-in mutual exclusion mechanism — essential for safe concurrent access to shared state.<br/><br/>
                <strong>Interview Answer:</strong> <code>synchronized</code> acquires a <strong>monitor lock</strong> (intrinsic lock) on an object before executing the protected block, and releases it when the block exits (even on exception). Only one thread at a time can hold a given monitor.
                <br/><br/>Three forms:
                <br/>• <strong>Synchronized method (instance)</strong> — locks on <code>this</code>.
                <br/>• <strong>Synchronized method (static)</strong> — locks on the <code>Class</code> object.
                <br/>• <strong>Synchronized block</strong> — locks on a specified object (finer granularity, preferred for performance).
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>class Counter {
    private int count = 0;
    private final Object lock = new Object();

    // Synchronized block — fine-grained
    void increment() {
        synchronized (lock) {
            count++;   // only one thread executes this at a time
        }
    }

    // Synchronized method — locks on 'this'
    synchronized int getCount() { return count; }
}</code></pre>
              </div>`
          },
          // ── Q5
          {
            q:   'What is the <code>volatile</code> keyword?',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Explanation:</strong> <code>volatile</code> solves the visibility problem in multithreading without the full cost of <code>synchronized</code>.<br/><br/>
                <strong>Interview Answer:</strong> Marking a field <code>volatile</code> guarantees two things:
                <br/>• <strong>Visibility</strong> — writes to the field are immediately flushed to main memory; reads always fetch from main memory (bypassing CPU cache). Every thread sees the latest value.
                <br/>• <strong>Prevents instruction reordering</strong> around the read/write (happens-before guarantee).
                <br/><br/><strong>What it does NOT provide:</strong> atomicity for compound operations like <code>count++</code> (read-modify-write). Use <code>AtomicInteger</code> or <code>synchronized</code> for those.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>class StopFlag {
    private volatile boolean stopped = false;  // visible across threads

    void stop() { stopped = true; }

    void run() {
        while (!stopped) {   // always reads fresh value from memory
            doWork();
        }
    }
}

// Without volatile — the loop might never see stopped=true (cached in CPU register)</code></pre>
              </div>`
          },
          // ── Q6
          {
            q:   'What is the difference between <code>wait()</code>, <code>notify()</code>, and <code>notifyAll()</code>?',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Explanation:</strong> These methods enable inter-thread communication using the monitor protocol.<br/><br/>
                <strong>Interview Answer:</strong> All three must be called from within a <code>synchronized</code> block on the same object (else <code>IllegalMonitorStateException</code>).
                <br/>• <code>wait()</code> — releases the lock and puts the calling thread into <strong>WAITING</strong> state until another thread calls <code>notify()</code> or <code>notifyAll()</code> on the same object.
                <br/>• <code>notify()</code> — wakes up <em>one</em> arbitrary waiting thread. That thread must re-acquire the lock before proceeding.
                <br/>• <code>notifyAll()</code> — wakes up <em>all</em> waiting threads. Each competes for the lock. Safer than <code>notify()</code> to avoid missed signals.
                <br/><br/>Modern alternatives: <code>Condition</code> from <code>java.util.concurrent.locks</code>, or <code>BlockingQueue</code>.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>synchronized (queue) {
    while (queue.isEmpty()) {
        queue.wait();          // release lock + sleep
    }
    process(queue.poll());
}

// Producer side:
synchronized (queue) {
    queue.add(item);
    queue.notifyAll();         // wake all waiting consumers
}</code></pre>
              </div>`
          },
          // ── Q7
          {
            q:   'Does calling <code>Thread.sleep()</code> release the lock?',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Explanation:</strong> A common interview trap that tests understanding of sleep vs wait.<br/><br/>
                <strong>Interview Answer:</strong> <strong>No.</strong> <code>Thread.sleep(ms)</code> pauses the thread for the specified time but does <strong>not</strong> release any monitors (locks) the thread holds. Other threads that need those locks remain blocked during the sleep.
                <br/><br/><code>Object.wait()</code>, on the other hand, <em>does</em> release the monitor before waiting, allowing other threads to acquire it.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Text</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>Method             Releases Lock?   Can be Interrupted?  Where Called
--------------     -------------    -------------------  ----------------
Thread.sleep(ms)   NO               Yes (InterruptedEx)  Anywhere
Object.wait()      YES              Yes (InterruptedEx)  synchronized block
LockSupport.park() NO               Yes                  Anywhere</code></pre>
              </div>`
          },
          // ── Q8
          {
            q:   'What is <code>ExecutorService</code> and why use it over raw threads?',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Explanation:</strong> Raw thread creation is expensive; <code>ExecutorService</code> provides a managed pool.<br/><br/>
                <strong>Interview Answer:</strong> <code>ExecutorService</code> (in <code>java.util.concurrent</code>) manages a pool of worker threads, decoupling task submission from thread lifecycle. Benefits over raw threads:
                <br/>• <strong>Reuse</strong> — threads are recycled, avoiding creation/destruction overhead.
                <br/>• <strong>Bounded concurrency</strong> — control max thread count to prevent resource exhaustion.
                <br/>• <strong>Task management</strong> — submit <code>Runnable</code>/<code>Callable</code>, get <code>Future</code> results, schedule tasks.
                <br/>• <strong>Graceful shutdown</strong> — <code>shutdown()</code> / <code>shutdownNow()</code>.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>ExecutorService pool = Executors.newFixedThreadPool(4);

Future&lt;Integer&gt; future = pool.submit(() -&gt; {
    return expensiveComputation();
});

Integer result = future.get();   // blocks until done (or throws)

pool.shutdown();                 // stop accepting new tasks
pool.awaitTermination(30, TimeUnit.SECONDS);</code></pre>
              </div>`
          },
          // ── Q9
          {
            q:   'What is a deadlock and how do you prevent it?',
            tag: 'hard',
            body: `
              <p class="accordion-answer">
                <strong>Explanation:</strong> Deadlock is one of the most critical concurrency bugs — it silently stalls threads forever.<br/><br/>
                <strong>Interview Answer:</strong> A deadlock occurs when two or more threads are each waiting for a lock held by another, forming a circular wait. Four necessary conditions (Coffman conditions): mutual exclusion, hold &amp; wait, no preemption, circular wait.
                <br/><br/><strong>Prevention strategies:</strong>
                <br/>• Acquire locks in a <strong>consistent global order</strong> across all threads.
                <br/>• Use <code>tryLock(timeout, unit)</code> from <code>ReentrantLock</code> — back off if timeout expires.
                <br/>• Use higher-level concurrency utilities (<code>ConcurrentHashMap</code>, <code>BlockingQueue</code>) instead of explicit locking.
                <br/>• Minimise synchronized scope — hold locks for the shortest time possible.
                <br/>• Use thread dump + <code>jstack &lt;pid&gt;</code> to detect deadlocks in production.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>// ❌ Deadlock risk — T1 locks A then B; T2 locks B then A
synchronized(lockA) { synchronized(lockB) { /* T1 */ } }
synchronized(lockB) { synchronized(lockA) { /* T2 */ } }

// ✓ Fix — consistent lock order
synchronized(lockA) { synchronized(lockB) { /* both threads */ } }

// ✓ Fix — tryLock with timeout
if (lockA.tryLock(100, MILLISECONDS)) {
    try {
        if (lockB.tryLock(100, MILLISECONDS)) {
            try { /* critical section */ } finally { lockB.unlock(); }
        }
    } finally { lockA.unlock(); }
}</code></pre>
              </div>`
          },
          // ── Q10
          {
            q:   'What is <code>ThreadLocal</code> and when do you use it?',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Explanation:</strong> <code>ThreadLocal</code> gives each thread its own independent copy of a variable — no synchronisation needed.<br/><br/>
                <strong>Interview Answer:</strong> <code>ThreadLocal&lt;T&gt;</code> stores a value per thread. Each thread that accesses <code>get()</code>/<code>set()</code> works with its own isolated copy. Common uses:
                <br/>• Storing the current user/session in a web request (Spring's <code>SecurityContextHolder</code>).
                <br/>• Storing database connections or formatters in per-thread caches.
                <br/><br/><strong>Warning:</strong> In thread pools (Tomcat, Executors), threads are reused. Always call <code>ThreadLocal.remove()</code> after the task finishes, otherwise stale data leaks to the next request.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>public class RequestContext {
    private static final ThreadLocal&lt;String&gt; USER =
        ThreadLocal.withInitial(() -&gt; "anonymous");

    public static void setUser(String u) { USER.set(u); }
    public static String getUser()       { return USER.get(); }
    public static void clear()           { USER.remove(); }  // ✅ must call!
}</code></pre>
              </div>`
          },
          // ── Q11
          {
            q:   'What are thread priorities and do they guarantee execution order?',
            tag: 'easy',
            body: `
              <p class="accordion-answer">
                <strong>Explanation:</strong> Thread priorities are a hint to the OS scheduler, not a hard guarantee.<br/><br/>
                <strong>Interview Answer:</strong> Java threads have a priority between <code>Thread.MIN_PRIORITY</code> (1) and <code>Thread.MAX_PRIORITY</code> (10), default <code>Thread.NORM_PRIORITY</code> (5). Higher-priority threads are <em>more likely</em> to be scheduled first, but the actual behaviour depends entirely on the OS scheduler — Java makes no guarantees. On some OS platforms priorities are ignored entirely.
                <br/><br/>Do <strong>not</strong> use thread priorities as a correctness mechanism; use them only as performance hints.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>Thread t = new Thread(task);
t.setPriority(Thread.MAX_PRIORITY);  // hint only — not a guarantee
t.start();</code></pre>
              </div>`
          },
          // ── Q12
          {
            q:   'What is a daemon thread?',
            tag: 'easy',
            body: `
              <p class="accordion-answer">
                <strong>Explanation:</strong> Daemon threads are background service threads that the JVM terminates automatically when no non-daemon threads remain.<br/><br/>
                <strong>Interview Answer:</strong> A <strong>daemon thread</strong> is a low-priority background thread that supports user (non-daemon) threads. When all user threads finish, the JVM exits and kills all daemon threads without waiting for them to complete. The GC thread, JIT compiler thread, and Finaliser thread are examples of JVM daemon threads.
                <br/><br/>Set before calling <code>start()</code>: <code>thread.setDaemon(true)</code>. The <code>main</code> thread is a non-daemon thread by default.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>Thread logger = new Thread(() -&gt; {
    while (true) { flushLogs(); sleep(1000); }
});
logger.setDaemon(true);  // JVM won't wait for this thread to finish
logger.start();</code></pre>
              </div>`
          },
          // ── Q13
          {
            q:   'What is the difference between <code>Runnable</code> and <code>Callable</code>?',
            tag: 'easy',
            body: `
              <p class="accordion-answer">
                <strong>Explanation:</strong> Both represent tasks for threads, but <code>Callable</code> adds return value and exception support.<br/><br/>
                <strong>Interview Answer:</strong>
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Text</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>Feature              Runnable           Callable&lt;V&gt;
---------------      ---------------    -------------------
Return type          void               V (generic)
Throws checked ex    No                 Yes
Method               run()              call()
Used with            Thread, Executor   ExecutorService.submit()
Result access        N/A                Future&lt;V&gt;</code></pre>
              </div>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>Callable&lt;String&gt; task = () -&gt; fetchFromDB();   // may throw
Future&lt;String&gt; future = executor.submit(task);
String result = future.get(5, TimeUnit.SECONDS); // blocks, throws on timeout</code></pre>
              </div>`
          },
          // ── Q14
          {
            q:   'How do you identify a stuck or deadlocked thread in production?',
            tag: 'hard',
            body: `
              <p class="accordion-answer">
                <strong>Explanation:</strong> A practical production debugging question — thread dumps are a key skill.<br/><br/>
                <strong>Interview Answer:</strong> Steps to diagnose a stuck thread:
                <br/>1. <strong>Thread dump</strong> — <code>kill -3 &lt;pid&gt;</code> on Linux or <code>jstack &lt;pid&gt;</code>. Shows all thread states, stack traces, and deadlock cycles (explicitly flagged as "Found one Java-level deadlock").
                <br/>2. Look for threads in <strong>BLOCKED</strong> or <strong>WAITING</strong> state for unusually long durations.
                <br/>3. Check <strong>lock ownership</strong> — which thread holds the lock the blocked thread is waiting for.
                <br/>4. Use monitoring tools: <strong>VisualVM</strong>, <strong>JMC</strong> (Java Mission Control), <strong>Actuator /threaddump</strong> in Spring Boot, <strong>Grafana + Micrometer</strong> thread metrics.
                <br/>5. Check for <strong>infinite loops</strong> (thread stuck in RUNNABLE with 100% CPU).
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Shell</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code># Get PID
jps -l

# Thread dump to file
jstack 12345 > thread_dump.txt

# Or via Spring Boot Actuator
GET /actuator/threaddump</code></pre>
              </div>`
          },
          // ── Q15
          {
            q:   'What is <code>CompletableFuture</code> and how is it different from <code>Future</code>?',
            tag: 'hard',
            body: `
              <p class="accordion-answer">
                <strong>Explanation:</strong> <code>CompletableFuture</code> is the Java 8 answer to composable async programming.<br/><br/>
                <strong>Interview Answer:</strong> <code>Future&lt;T&gt;</code> (Java 5) represents a pending result but is limited — <code>get()</code> blocks, no callbacks, cannot chain operations. <code>CompletableFuture&lt;T&gt;</code> (Java 8) extends <code>Future</code> with:
                <br/>• <strong>Non-blocking callbacks</strong>: <code>thenApply</code>, <code>thenAccept</code>, <code>thenCompose</code>.
                <br/>• <strong>Combining</strong>: <code>thenCombine</code>, <code>allOf</code>, <code>anyOf</code>.
                <br/>• <strong>Error handling</strong>: <code>exceptionally</code>, <code>handle</code>.
                <br/>• <strong>Manual completion</strong>: <code>complete(value)</code>, <code>completeExceptionally(ex)</code>.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>CompletableFuture
    .supplyAsync(() -&gt; fetchUser(id))           // async on common pool
    .thenApply(user -&gt; enrichWithProfile(user))  // transform result
    .thenAccept(System.out::println)             // consume result
    .exceptionally(ex -&gt; {                       // handle error
        log.error("Failed", ex);
        return null;
    });
// Non-blocking — current thread is free to do other work</code></pre>
              </div>`
          }
        ]
      },
      // ════════════════════════════════════════
      //  DAY 8
      // ════════════════════════════════════════
      {
        id:     'day8',
        day:    8,
        title:  'Spring Core',
        topics: ['IoC / DI', 'DI Types', 'Bean Lifecycle', 'Scopes', '@Component/@Service/@Repository', '@Bean vs @Component', '@Autowired / @Qualifier', 'AOP', 'Circular Dependency'],
        questions: [
          // ── Q1
          {
            q:   'What is Inversion of Control (IoC) and Dependency Injection (DI)?',
            tag: 'easy',
            body: `
              <p class="accordion-answer">
                <strong>Explanation:</strong> IoC and DI are the core design principles that make Spring powerful and testable.<br/><br/>
                <strong>Interview Answer:</strong>
                <br/>• <strong>IoC</strong> — instead of your code creating its dependencies with <code>new</code>, control is <em>inverted</em>: the Spring container creates and manages object lifecycles. Your code just declares what it needs.
                <br/>• <strong>DI</strong> — the mechanism IoC uses. The container <em>injects</em> required dependencies into your class (via constructor, setter, or field). This decouples classes from each other, making them independently testable.
                <br/><br/><strong>Benefit:</strong> Swap implementations without changing consumer code; mock dependencies in unit tests without any framework.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>// ❌ Without DI — tightly coupled, hard to test
class OrderService {
    private final PaymentService ps = new PaymentService();  // new!
}

// ✓ With DI — loosely coupled, mockable
@Service
class OrderService {
    private final PaymentService paymentService;

    OrderService(PaymentService paymentService) {   // injected by Spring
        this.paymentService = paymentService;
    }
}</code></pre>
              </div>`
          },
          // ── Q2
          {
            q:   'What are the types of Dependency Injection in Spring?',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Explanation:</strong> Spring supports three injection styles — each with different trade-offs.<br/><br/>
                <strong>Interview Answer:</strong>
                <br/>1. <strong>Constructor Injection</strong> — dependencies passed via constructor. ✅ Preferred. Ensures immutability, mandatory dependencies, easy testing without Spring, detects circular deps at startup.
                <br/>2. <strong>Setter Injection</strong> — dependencies set via <code>@Autowired</code> setter methods. Use for optional dependencies. Allows partial injection.
                <br/>3. <strong>Field Injection</strong> — <code>@Autowired</code> directly on a field. ❌ Avoid in production. Cannot inject without Spring, cannot use <code>final</code>, hides dependencies, makes unit testing harder.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>// ✅ Constructor injection (best practice)
@Service
class UserService {
    private final UserRepository repo;
    UserService(UserRepository repo) { this.repo = repo; }
}

// ✅ Setter injection (optional deps)
@Autowired
public void setEmailService(EmailService es) { this.emailService = es; }

// ❌ Field injection — avoid
@Autowired
private UserRepository repo;  // can't be final, hard to test</code></pre>
              </div>`
          },
          // ── Q3
          {
            q:   'Why is constructor injection preferred over field injection?',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Explanation:</strong> This is a common follow-up — interviewers want you to reason about testability and immutability.<br/><br/>
                <strong>Interview Answer:</strong> Constructor injection is preferred because:
                <br/>• <strong>Immutability</strong> — fields can be <code>final</code>, preventing accidental reassignment.
                <br/>• <strong>Mandatory dependencies explicit</strong> — missing deps cause startup failure, not a runtime NPE.
                <br/>• <strong>Testable without Spring</strong> — pass mocks directly via constructor: <code>new UserService(mockRepo)</code>.
                <br/>• <strong>Detects circular deps</strong> — Spring throws <code>BeanCurrentlyInCreationException</code> at startup instead of at runtime.
                <br/>• <strong>Code clarity</strong> — a class with too many constructor args is a clear signal it violates Single Responsibility.
              </p>`
          },
          // ── Q4
          {
            q:   'What is a Spring Bean and what is the Spring Bean lifecycle?',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Explanation:</strong> Beans are the fundamental building blocks of a Spring application.<br/><br/>
                <strong>Interview Answer:</strong> A <strong>Spring Bean</strong> is any object managed by the Spring IoC container — instantiated, configured, assembled, and destroyed by Spring. The lifecycle:
                <br/>1. <strong>Instantiation</strong> — Spring creates the bean (calls constructor).
                <br/>2. <strong>Dependency injection</strong> — setters/fields populated.
                <br/>3. <strong>Bean Name Aware / ApplicationContextAware</strong> callbacks.
                <br/>4. <strong>BeanPostProcessor.postProcessBeforeInitialisation</strong>.
                <br/>5. <strong>@PostConstruct / InitializingBean.afterPropertiesSet()</strong> — custom init logic.
                <br/>6. <strong>BeanPostProcessor.postProcessAfterInitialisation</strong> — AOP proxies created here.
                <br/>7. <strong>Bean in use</strong> (application running).
                <br/>8. <strong>@PreDestroy / DisposableBean.destroy()</strong> — cleanup on shutdown.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>@Component
class CacheService {
    @PostConstruct
    void init() { loadCache(); }     // called after injection

    @PreDestroy
    void cleanup() { saveCache(); }  // called before container shutdown
}</code></pre>
              </div>`
          },
          // ── Q5
          {
            q:   'What are Spring Bean scopes?',
            tag: 'easy',
            body: `
              <p class="accordion-answer">
                <strong>Explanation:</strong> Scope controls how many instances of a bean exist and for how long.<br/><br/>
                <strong>Interview Answer:</strong>
                <br/>• <strong>singleton</strong> (default) — one shared instance per Spring container. All injection points receive the same object.
                <br/>• <strong>prototype</strong> — a new instance is created every time the bean is requested from the container.
                <br/>• <strong>request</strong> — one instance per HTTP request. Destroyed at end of request. (Web-aware only.)
                <br/>• <strong>session</strong> — one instance per HTTP session. (Web-aware only.)
                <br/>• <strong>application</strong> — one instance per <code>ServletContext</code>.
                <br/><br/>⚠️ Injecting a <code>prototype</code> bean into a <code>singleton</code> requires <code>ObjectProvider</code> or <code>@Lookup</code> — otherwise the prototype is only created once.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>@Bean
@Scope("prototype")
public ReportGenerator reportGenerator() { return new ReportGenerator(); }</code></pre>
              </div>`
          },
          // ── Q6
          {
            q:   'What is the difference between <code>@Component</code>, <code>@Service</code>, and <code>@Repository</code>?',
            tag: 'easy',
            body: `
              <p class="accordion-answer">
                <strong>Explanation:</strong> All three are stereotype annotations — they register a bean, but carry different semantic meaning.<br/><br/>
                <strong>Interview Answer:</strong> All three are specialisations of <code>@Component</code> — they all trigger bean registration via component scanning. The difference is semantic and functional:
                <br/>• <code>@Component</code> — generic bean, any layer.
                <br/>• <code>@Service</code> — marks business logic layer. No extra behaviour; improves readability.
                <br/>• <code>@Repository</code> — marks data access layer. Spring automatically translates <code>SQLException</code> and JPA persistence exceptions into Spring's <code>DataAccessException</code> hierarchy (exception translation).
                <br/>• <code>@Controller</code> / <code>@RestController</code> — marks the presentation (web) layer.
              </p>`
          },
          // ── Q7
          {
            q:   'What is the difference between <code>@Bean</code> and <code>@Component</code>?',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Explanation:</strong> Both register beans, but in different ways — knowing when to use each is important.<br/><br/>
                <strong>Interview Answer:</strong>
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Text</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>Feature          @Component                  @Bean
-----------      --------------------------  ----------------------------
Who registers    Component scan (automatic)  @Configuration class (manual)
Where used       On class declaration        On method in @Configuration
Control          Limited                     Full — you write the constructor
Third-party      ❌ Cannot annotate class    ✅ Wrap any class in a @Bean method
Customisation    Basic                       Full control over creation logic</code></pre>
              </div>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>@Configuration
class AppConfig {
    @Bean
    public RestTemplate restTemplate() {   // 3rd-party class — can't @Component it
        RestTemplate rt = new RestTemplate();
        rt.setConnectTimeout(5000);
        return rt;
    }
}</code></pre>
              </div>`
          },
          // ── Q8
          {
            q:   'What is <code>@Autowired</code>? What is <code>@Qualifier</code> and <code>@Primary</code>?',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Explanation:</strong> These three annotations work together to control how Spring resolves injection when multiple beans match.<br/><br/>
                <strong>Interview Answer:</strong>
                <br/>• <code>@Autowired</code> — tells Spring to inject the matching bean automatically. Matches by type first, then by name.
                <br/>• <strong>Problem:</strong> if two beans of the same type exist (e.g., two <code>DataSource</code> beans), Spring throws <code>NoUniqueBeanDefinitionException</code>.
                <br/>• <code>@Primary</code> — marks one bean as the default choice when multiple candidates exist.
                <br/>• <code>@Qualifier("beanName")</code> — explicitly specifies which bean to inject by name. Overrides <code>@Primary</code>.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>@Bean @Primary
DataSource primaryDataSource() { return new HikariDataSource(primaryConfig); }

@Bean("analyticsDS")
DataSource analyticsDataSource() { return new HikariDataSource(analyticsConfig); }

@Service
class ReportService {
    // Uses primary by default
    @Autowired DataSource dataSource;

    // Override with @Qualifier
    @Autowired @Qualifier("analyticsDS")
    DataSource analyticsDataSource;
}</code></pre>
              </div>`
          },
          // ── Q9
          {
            q:   'What is the difference between <code>BeanFactory</code> and <code>ApplicationContext</code>?',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Explanation:</strong> <code>ApplicationContext</code> is the enhanced IoC container used in virtually all Spring applications.<br/><br/>
                <strong>Interview Answer:</strong>
                <br/>• <code>BeanFactory</code> — the basic IoC container. Lazy-initialises beans (created on first request). Minimal footprint — used in memory-constrained environments.
                <br/>• <code>ApplicationContext</code> — extends <code>BeanFactory</code> with enterprise features:
                  <br/>&nbsp;&nbsp;— Eager initialises singleton beans at startup (fails fast on misconfiguration).
                  <br/>&nbsp;&nbsp;— Event publishing (<code>ApplicationEventPublisher</code>).
                  <br/>&nbsp;&nbsp;— i18n (MessageSource).
                  <br/>&nbsp;&nbsp;— AOP integration.
                  <br/>&nbsp;&nbsp;— <code>@ComponentScan</code> support.
                <br/><br/>Always use <code>ApplicationContext</code> (e.g., <code>AnnotationConfigApplicationContext</code>, or the one Spring Boot creates automatically).
              </p>`
          },
          // ── Q10
          {
            q:   'What is <code>@ComponentScan</code> and how does it work?',
            tag: 'easy',
            body: `
              <p class="accordion-answer">
                <strong>Explanation:</strong> Component scanning is how Spring auto-discovers beans without XML configuration.<br/><br/>
                <strong>Interview Answer:</strong> <code>@ComponentScan</code> tells Spring to scan specified packages (and sub-packages) for classes annotated with <code>@Component</code>, <code>@Service</code>, <code>@Repository</code>, <code>@Controller</code>, and <code>@Configuration</code>, and register them as beans automatically.
                <br/><br/><code>@SpringBootApplication</code> includes <code>@ComponentScan</code> with the main class's package as the base, so all classes in that package and below are automatically detected — which is why your main class should be in the root package.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>@SpringBootApplication  // includes @ComponentScan(basePackages = "com.example")
public class Application { public static void main(String[] a) { SpringApplication.run(Application.class, a); } }

// Explicit scan of multiple packages
@ComponentScan(basePackages = {"com.example.services", "com.example.repos"})</code></pre>
              </div>`
          },
          // ── Q11
          {
            q:   'What are stereotype annotations in Spring?',
            tag: 'easy',
            body: `
              <p class="accordion-answer">
                <strong>Explanation:</strong> Stereotype annotations tell Spring the role of a class in the architecture.<br/><br/>
                <strong>Interview Answer:</strong> Stereotype annotations are meta-annotations that all extend <code>@Component</code>. They register the class as a Spring bean and signal its architectural role:
                <br/>• <code>@Component</code> — generic component.
                <br/>• <code>@Service</code> — service/business logic layer.
                <br/>• <code>@Repository</code> — data access layer (adds exception translation).
                <br/>• <code>@Controller</code> — web MVC layer (returns views).
                <br/>• <code>@RestController</code> — REST web layer (= @Controller + @ResponseBody).
                <br/>• <code>@Configuration</code> — source of bean definitions.
              </p>`
          },
          // ── Q12
          {
            q:   'What causes a circular dependency in Spring and how do you fix it?',
            tag: 'hard',
            body: `
              <p class="accordion-answer">
                <strong>Explanation:</strong> Circular dependencies are a design smell that Spring detects at startup for constructor injection.<br/><br/>
                <strong>Interview Answer:</strong> A circular dependency occurs when Bean A needs Bean B, and Bean B needs Bean A (or a longer cycle). With constructor injection, Spring throws <code>BeanCurrentlyInCreationException</code> at startup because neither bean can be fully created first.
                <br/><br/><strong>Fix options (in order of preference):</strong>
                <br/>1. <strong>Refactor</strong> — extract the shared logic into a third bean (best approach, fixes the design).
                <br/>2. <code>@Lazy</code> on one injection point — Spring injects a proxy that's resolved on first use.
                <br/>3. Use setter injection instead of constructor — Spring can create both objects first, then inject (less safe).
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>// ❌ Circular — A needs B, B needs A
@Service class A { A(B b) {} }
@Service class B { B(A a) {} }  // BeanCurrentlyInCreationException

// ✓ Fix 1 — extract shared logic to C
@Service class C { /* shared logic */ }
@Service class A { A(C c) {} }
@Service class B { B(C c) {} }

// ✓ Fix 2 — @Lazy proxy
@Service class A { A(@Lazy B b) {} }</code></pre>
              </div>`
          },
          // ── Q13
          {
            q:   'What is the difference between <code>@Configuration</code> and <code>@Component</code>?',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Explanation:</strong> Both register beans, but <code>@Configuration</code> uses CGLIB proxying to ensure singleton behaviour for <code>@Bean</code> methods.<br/><br/>
                <strong>Interview Answer:</strong> <code>@Configuration</code> is a specialisation of <code>@Component</code> but with one critical difference: Spring generates a <strong>CGLIB subclass proxy</strong> of the <code>@Configuration</code> class. This means that when one <code>@Bean</code> method calls another <code>@Bean</code> method in the same class, Spring intercepts the call and returns the existing singleton bean from the container instead of creating a new instance.
                <br/><br/><code>@Component</code> classes are not proxied, so inter-method <code>@Bean</code> calls would create new instances instead of returning the managed singletons.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>@Configuration   // CGLIB proxied
class AppConfig {
    @Bean ServiceA serviceA() { return new ServiceA(serviceB()); }
    @Bean ServiceB serviceB() { return new ServiceB(); }
    // serviceB() called above returns the SAME bean from container
}

@Component       // Not proxied
class NotAConfig {
    @Bean ServiceB serviceB() { return new ServiceB(); }
    // each call creates a NEW ServiceB — likely a bug
}</code></pre>
              </div>`
          },
          // ── Q14
          {
            q:   'How does Spring AOP work and what are its key terms?',
            tag: 'hard',
            body: `
              <p class="accordion-answer">
                <strong>Explanation:</strong> AOP lets you add cross-cutting concerns (logging, transactions, security) without polluting business logic.<br/><br/>
                <strong>Interview Answer:</strong> Spring AOP uses <strong>dynamic proxies</strong> at runtime to intercept method calls:
                <br/>• <strong>JDK dynamic proxy</strong> — used when the bean implements an interface.
                <br/>• <strong>CGLIB proxy</strong> — used when no interface; subclasses the bean class.
                <br/><br/>Key terms:
                <br/>• <strong>Aspect</strong> — the cross-cutting concern module (e.g., <code>@Aspect</code> class).
                <br/>• <strong>Advice</strong> — the action taken: <code>@Before</code>, <code>@After</code>, <code>@AfterReturning</code>, <code>@AfterThrowing</code>, <code>@Around</code>.
                <br/>• <strong>Pointcut</strong> — expression matching join points (e.g., <code>execution(* com.example.service.*.*(..))</code>).
                <br/>• <strong>Join point</strong> — a point in execution where advice can be applied (in Spring AOP, always a method call).
                <br/>• <strong>Weaving</strong> — linking aspects with target objects (Spring does this at runtime with proxies).
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>@Aspect @Component
class LoggingAspect {
    @Around("execution(* com.example.service.*.*(..))")
    Object logTime(ProceedingJoinPoint pjp) throws Throwable {
        long start = System.currentTimeMillis();
        Object result = pjp.proceed();   // call real method
        log.info("{} took {}ms", pjp.getSignature(), System.currentTimeMillis() - start);
        return result;
    }
}</code></pre>
              </div>`
          },
          // ── Q15
          {
            q:   'What is Spring\'s <code>@Transactional</code> and why does it sometimes not work?',
            tag: 'hard',
            body: `
              <p class="accordion-answer">
                <strong>Explanation:</strong> <code>@Transactional</code> is AOP-based — its proxy nature creates subtle failure modes that interviewers love to test.<br/><br/>
                <strong>Interview Answer:</strong> <code>@Transactional</code> wraps the method in a database transaction managed by Spring. If the method throws a <code>RuntimeException</code>, the transaction is rolled back; otherwise it is committed.
                <br/><br/><strong>Common reasons it doesn't work:</strong>
                <br/>1. <strong>Self-invocation</strong> — calling a <code>@Transactional</code> method from within the same class bypasses the proxy (direct this.method() call). Fix: inject self or restructure.
                <br/>2. <strong>private / protected method</strong> — Spring AOP proxy cannot intercept non-public methods. Make the method public.
                <br/>3. <strong>Wrong exception type</strong> — by default only <code>RuntimeException</code> triggers rollback. For checked exceptions add <code>rollbackFor = Exception.class</code>.
                <br/>4. <strong>Bean not managed by Spring</strong> — created with <code>new</code> instead of injected.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>@Service
class OrderService {
    // ❌ Self-invocation — @Transactional on processOrder is bypassed
    public void placeOrder() { processOrder(); }

    @Transactional
    public void processOrder() { /* DB work */ }
}

// ✓ Fix — make placeOrder @Transactional or restructure to a separate bean
@Transactional(rollbackFor = Exception.class)  // roll back for ALL exceptions
public void processOrder() throws IOException { /* ... */ }</code></pre>
              </div>`
          }
        ]
      },
      // ════════════════════════════════════════
      //  DAY 9
      // ════════════════════════════════════════
      {
        id:     'day9',
        day:    9,
        title:  'Spring Boot & Microservices',
        topics: ['@SpringBootApplication', 'Auto-Configuration', 'HTTP Request Flow', 'REST Annotations', 'Validation', 'Exception Handling', 'Profiles', 'Actuator', 'Microservices Patterns', '@Transactional Pitfalls', 'LazyInit'],
        questions: [
          // ── Q1
          {
            q:   'What does <code>@SpringBootApplication</code> do internally?',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Explanation:</strong> This is a composite annotation — understanding its components shows depth of knowledge.<br/><br/>
                <strong>Interview Answer:</strong> <code>@SpringBootApplication</code> is a convenience annotation combining three annotations:
                <br/>• <code>@SpringBootConfiguration</code> — marks it as a <code>@Configuration</code> class (bean definitions).
                <br/>• <code>@EnableAutoConfiguration</code> — triggers Spring Boot's auto-configuration mechanism (reads <code>AutoConfiguration.imports</code>, applies conditional config classes).
                <br/>• <code>@ComponentScan</code> — scans the current package and all sub-packages for Spring-managed components.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>// Equivalent to:
@SpringBootConfiguration
@EnableAutoConfiguration
@ComponentScan(basePackages = "com.example")
public class Application {
    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }
}</code></pre>
              </div>`
          },
          // ── Q2
          {
            q:   'How does Spring Boot auto-configuration work?',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Explanation:</strong> Auto-configuration is Spring Boot's core "magic" — understanding it separates intermediate from advanced developers.<br/><br/>
                <strong>Interview Answer:</strong> <code>@EnableAutoConfiguration</code> reads configuration class names from <code>META-INF/spring/org.springframework.boot.autoconfigure.AutoConfiguration.imports</code>. Each listed class is a <code>@Configuration</code> class decorated with <code>@ConditionalOn*</code> annotations. Spring Boot evaluates conditions at startup:
                <br/>• <code>@ConditionalOnClass</code> — only configure if a class is on the classpath (e.g., configure <code>DataSource</code> only if HikariCP is present).
                <br/>• <code>@ConditionalOnMissingBean</code> — only configure if the application has not already defined its own bean (allows override).
                <br/>• <code>@ConditionalOnProperty</code> — only configure if a property is set.
                <br/><br/>You can see all auto-configuration decisions with <code>--debug</code> flag at startup.
              </p>`
          },
          // ── Q3
          {
            q:   'What are Spring Boot starter dependencies?',
            tag: 'easy',
            body: `
              <p class="accordion-answer">
                <strong>Explanation:</strong> Starters eliminate dependency management boilerplate — one of Spring Boot's biggest productivity wins.<br/><br/>
                <strong>Interview Answer:</strong> A <strong>starter</strong> is a curated dependency descriptor that pulls in all required libraries for a feature, with compatible versions pre-selected. You don't need to know individual library versions or worry about conflicts.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Text</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>Starter                          What it includes
-----------------------------    ------------------------------------------
spring-boot-starter-web          Spring MVC, Tomcat, Jackson, validation
spring-boot-starter-data-jpa     Hibernate, Spring Data JPA, JDBC
spring-boot-starter-security     Spring Security core
spring-boot-starter-test         JUnit 5, Mockito, AssertJ, Spring test
spring-boot-starter-actuator     Metrics, health, info endpoints</code></pre>
              </div>`
          },
          // ── Q4
          {
            q:   'Describe the flow of an HTTP request through a Spring Boot application.',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Explanation:</strong> Knowing the full request pipeline helps debug issues and understand Spring MVC internals.<br/><br/>
                <strong>Interview Answer:</strong>
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Text</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>Client
  │
  ▼
Embedded Tomcat (port 8080)
  │
  ▼
Filter Chain (security, CORS, logging filters)
  │
  ▼
DispatcherServlet  ←  Front Controller (one per app)
  │
  ▼
HandlerMapping     ←  Find which @Controller method matches URL
  │
  ▼
HandlerAdapter     ←  Invoke the controller method, resolve args (@RequestBody etc.)
  │
  ▼
@Controller / @RestController method
  │
  ▼
Service → Repository → Database
  │
  ▼
MessageConverter   ←  Serialize return value to JSON (Jackson)
  │
  ▼
HTTP Response</code></pre>
              </div>`
          },
          // ── Q5
          {
            q:   'What is the difference between <code>@RequestParam</code>, <code>@PathVariable</code>, and <code>@RequestBody</code>?',
            tag: 'easy',
            body: `
              <p class="accordion-answer">
                <strong>Explanation:</strong> Three ways to extract data from an HTTP request — each serves a different purpose.<br/><br/>
                <strong>Interview Answer:</strong>
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Text</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>Annotation        Source                   Example URL / Body
--------------    ----------------------   --------------------------
@PathVariable     URL path segment         GET /users/42   → id=42
@RequestParam     Query string parameter   GET /users?city=Delhi → city="Delhi"
@RequestBody      HTTP request body JSON   POST /users  body: {"name":"Alice"}</code></pre>
              </div>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>@GetMapping("/users/{id}")
User getUser(@PathVariable Long id) { ... }

@GetMapping("/users")
List&lt;User&gt; search(@RequestParam String city,
                   @RequestParam(defaultValue="0") int page) { ... }

@PostMapping("/users")
User create(@RequestBody @Valid UserDto dto) { ... }</code></pre>
              </div>`
          },
          // ── Q6
          {
            q:   'How does global exception handling work in Spring Boot?',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Explanation:</strong> Centralised exception handling avoids try-catch boilerplate in every controller.<br/><br/>
                <strong>Interview Answer:</strong> <code>@RestControllerAdvice</code> (= <code>@ControllerAdvice + @ResponseBody</code>) creates a global exception-handling class. Methods annotated with <code>@ExceptionHandler</code> catch specific exception types thrown from any controller and return a structured error response.
                <br/><br/><strong>Advantages:</strong> Single place to manage all error responses; consistent error format; decouples error handling from business logic.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>@RestControllerAdvice
class GlobalExceptionHandler {

    @ExceptionHandler(ResourceNotFoundException.class)
    @ResponseStatus(HttpStatus.NOT_FOUND)
    ErrorResponse handleNotFound(ResourceNotFoundException ex) {
        return new ErrorResponse("NOT_FOUND", ex.getMessage());
    }

    @ExceptionHandler(MethodArgumentNotValidException.class)
    @ResponseStatus(HttpStatus.BAD_REQUEST)
    ErrorResponse handleValidation(MethodArgumentNotValidException ex) {
        String msg = ex.getBindingResult().getFieldErrors().stream()
            .map(f -&gt; f.getField() + ": " + f.getDefaultMessage())
            .collect(Collectors.joining(", "));
        return new ErrorResponse("VALIDATION_FAILED", msg);
    }
}</code></pre>
              </div>`
          },
          // ── Q7
          {
            q:   'What are Spring Profiles and how do you activate them?',
            tag: 'easy',
            body: `
              <p class="accordion-answer">
                <strong>Explanation:</strong> Profiles let you manage environment-specific configuration without changing code.<br/><br/>
                <strong>Interview Answer:</strong> A <strong>profile</strong> is a named environment configuration. You can have <code>application-dev.properties</code>, <code>application-qa.properties</code>, <code>application-prod.properties</code>. The active profile determines which file is loaded on top of the base <code>application.properties</code>.
                <br/><br/><strong>Activation methods:</strong>
                <br/>• <code>spring.profiles.active=prod</code> in <code>application.properties</code>.
                <br/>• JVM arg: <code>-Dspring.profiles.active=prod</code>.
                <br/>• Command line: <code>java -jar app.jar --spring.profiles.active=prod</code>.
                <br/>• Environment variable: <code>SPRING_PROFILES_ACTIVE=prod</code>.
                <br/><br/><code>@Profile("prod")</code> on a bean — only registers it when that profile is active.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>@Bean
@Profile("prod")
DataSource prodDataSource() { return new HikariDataSource(prodConfig); }

@Bean
@Profile("dev")
DataSource h2DataSource() { return new EmbeddedDatabaseBuilder().build(); }</code></pre>
              </div>`
          },
          // ── Q8
          {
            q:   'What is Spring Actuator and what endpoints does it expose?',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Explanation:</strong> Actuator provides production-ready monitoring and management endpoints out of the box.<br/><br/>
                <strong>Interview Answer:</strong> <code>spring-boot-starter-actuator</code> adds HTTP endpoints for monitoring and managing the application. Key endpoints:
                <br/>• <code>/actuator/health</code> — app health status (UP/DOWN); includes DB, disk, custom checks.
                <br/>• <code>/actuator/metrics</code> — JVM, CPU, memory, HTTP request metrics (integrates with Prometheus/Micrometer).
                <br/>• <code>/actuator/info</code> — app version, build info.
                <br/>• <code>/actuator/env</code> — active properties and environment.
                <br/>• <code>/actuator/threaddump</code> — all thread states.
                <br/>• <code>/actuator/loggers</code> — view/change log levels at runtime.
                <br/><br/>⚠️ Restrict exposure in production: <code>management.endpoints.web.exposure.include=health,metrics,info</code>
              </p>`
          },
          // ── Q9
          {
            q:   'What is the difference between <code>application.properties</code> and <code>bootstrap.properties</code>?',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Explanation:</strong> Both configure the app but at different phases — important for Spring Cloud Config setups.<br/><br/>
                <strong>Interview Answer:</strong>
                <br/>• <code>application.properties</code> — the standard Spring Boot configuration file. Loaded by the <code>ApplicationContext</code>. Contains app-level properties (port, datasource, etc.).
                <br/>• <code>bootstrap.properties</code> — loaded by a <em>parent</em> <code>ApplicationContext</code> (BootstrapContext) <strong>before</strong> the main context starts. Used by <strong>Spring Cloud</strong> to configure early-startup concerns like connecting to a Config Server (<code>spring.cloud.config.uri</code>) so that remote properties are available before any bean is created.
                <br/><br/>In Spring Boot 2.4+ and Spring Cloud 2020+, bootstrap is disabled by default. Re-enable with <code>spring.config.use-legacy-processing=true</code> or add <code>spring-cloud-starter-bootstrap</code>.
              </p>`
          },
          // ── Q10
          {
            q:   'What is <code>@ConfigurationProperties</code> and why use it?',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Explanation:</strong> A type-safe, structured alternative to injecting individual <code>@Value</code> properties.<br/><br/>
                <strong>Interview Answer:</strong> <code>@ConfigurationProperties(prefix = "app")</code> binds a group of related properties from <code>application.properties</code> directly into a typed Java class, with validation support. Advantages over <code>@Value</code>:
                <br/>• Type-safe and IDE auto-complete.
                <br/>• Group related properties cleanly.
                <br/>• Supports nested objects and lists.
                <br/>• Can be combined with <code>@Validated</code> for startup-time constraint checking.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>// application.properties
// app.payment.url=https://pay.example.com
// app.payment.timeout=5000
// app.payment.retry-count=3

@Component
@ConfigurationProperties(prefix = "app.payment")
@Validated
class PaymentProperties {
    @NotBlank  String url;
    @Min(1000) int timeout;
    int retryCount;
    // getters + setters
}</code></pre>
              </div>`
          },
          // ── Q11
          {
            q:   'Why is <code>spring.jpa.hibernate.ddl-auto=update</code> dangerous in production?',
            tag: 'hard',
            body: `
              <p class="accordion-answer">
                <strong>Explanation:</strong> A real-world best-practice question that catches many junior developers off guard.<br/><br/>
                <strong>Interview Answer:</strong> <code>ddl-auto=update</code> tells Hibernate to automatically alter the database schema at startup to match the entity model. This is dangerous in production because:
                <br/>• <strong>Data loss risk</strong> — Hibernate may drop columns or tables if the mapping changes.
                <br/>• <strong>No review/approval</strong> — schema changes happen automatically without a DBA or change control review.
                <br/>• <strong>Irreversible</strong> — dropped data cannot be recovered.
                <br/>• <strong>Race conditions</strong> — multiple pods starting simultaneously may conflict.
                <br/><br/><strong>Recommended values:</strong>
                <br/>• <code>validate</code> — startup fails if schema doesn't match (safe for production — early warning).
                <br/>• <code>none</code> — no DDL action (use a migration tool).
                <br/><br/><strong>Best practice:</strong> Use <strong>Flyway</strong> or <strong>Liquibase</strong> for version-controlled, reviewed schema migrations in production.
              </p>`
          },
          // ── Q12
          {
            q:   'What causes <code>LazyInitializationException</code> in Spring?',
            tag: 'hard',
            body: `
              <p class="accordion-answer">
                <strong>Explanation:</strong> One of the most common Hibernate/JPA pitfalls — especially in REST APIs.<br/><br/>
                <strong>Interview Answer:</strong> <code>LazyInitializationException</code> is thrown when you try to access a lazily-loaded JPA association (e.g., <code>@OneToMany</code> default is LAZY) <strong>outside</strong> an active Hibernate session (transaction). By the time the controller accesses the collection, the session has already closed (it opened and closed in the service layer).
                <br/><br/><strong>Fixes:</strong>
                <br/>1. <strong>Fetch in query</strong> — use <code>JOIN FETCH</code> in JPQL or <code>@EntityGraph</code> to eagerly load the association within the transaction. ✅ Best approach.
                <br/>2. <strong>DTO projection</strong> — select only the fields you need; no lazy proxies.
                <br/>3. <code>@Transactional</code> on the controller — keep session open longer. ❌ Bad practice (keeps DB connection open).
                <br/>4. <code>EAGER</code> fetch type — loads always, even when not needed. ❌ Performance problem.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>// ✅ Fix — JOIN FETCH inside transaction
@Query("SELECT o FROM Order o JOIN FETCH o.items WHERE o.id = :id")
Order findWithItems(@Param("id") Long id);

// ✅ Fix — @EntityGraph
@EntityGraph(attributePaths = "items")
Optional&lt;Order&gt; findById(Long id);</code></pre>
              </div>`
          },
          // ── Q13
          {
            q:   'What are the key patterns in a Microservices architecture?',
            tag: 'hard',
            body: `
              <p class="accordion-answer">
                <strong>Explanation:</strong> Microservices introduce distributed system challenges that require well-known patterns to address.<br/><br/>
                <strong>Interview Answer:</strong>
                <br/>• <strong>API Gateway</strong> — single entry point for all clients; handles routing, authentication, rate limiting, SSL termination. (Spring Cloud Gateway, Kong).
                <br/>• <strong>Service Discovery</strong> — services register themselves and discover others dynamically (Eureka, Consul). Avoids hardcoded URLs.
                <br/>• <strong>Circuit Breaker</strong> — when a downstream service fails repeatedly, trips the circuit and returns a fallback immediately instead of waiting (Resilience4j, Hystrix).
                <br/>• <strong>Config Server</strong> — centralised configuration for all services (Spring Cloud Config).
                <br/>• <strong>Distributed Tracing</strong> — correlate logs across services with a trace ID (Micrometer + Zipkin/Jaeger).
                <br/>• <strong>Saga Pattern</strong> — manages distributed transactions across services via choreography (events) or orchestration (central coordinator) instead of 2-phase commit.
                <br/>• <strong>Event-Driven (Kafka/RabbitMQ)</strong> — async communication for loose coupling and resilience.
              </p>`
          },
          // ── Q14
          {
            q:   'What is the difference between <code>@RestController</code> and <code>@Controller</code>?',
            tag: 'easy',
            body: `
              <p class="accordion-answer">
                <strong>Explanation:</strong> A common Day 1 Spring Boot question — know both the technical difference and the use case.<br/><br/>
                <strong>Interview Answer:</strong>
                <br/>• <code>@Controller</code> — marks a Spring MVC controller. Handler methods return a <strong>view name</strong> resolved by a <code>ViewResolver</code> (e.g., Thymeleaf template). Used for server-side rendered web applications.
                <br/>• <code>@RestController</code> — <code>@Controller + @ResponseBody</code>. Every handler method writes directly to the HTTP response body (serialised to JSON/XML by Jackson). Used for REST APIs.
                <br/><br/>If you annotate a method in a <code>@Controller</code> with <code>@ResponseBody</code>, it behaves identically to a method in <code>@RestController</code>.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>@Controller
class WebController {
    @GetMapping("/home")
    String home() { return "home";  }   // resolves home.html template
}

@RestController
class ApiController {
    @GetMapping("/api/users")
    List&lt;User&gt; users() { return service.getAll(); }  // serialised to JSON
}</code></pre>
              </div>`
          },
          // ── Q15
          {
            q:   'What is the difference between <code>@RequestMapping</code> and <code>@GetMapping</code>?',
            tag: 'easy',
            body: `
              <p class="accordion-answer">
                <strong>Explanation:</strong> <code>@GetMapping</code> and siblings are convenience shortcuts introduced in Spring 4.3.<br/><br/>
                <strong>Interview Answer:</strong> <code>@RequestMapping</code> is the general-purpose mapping annotation — you specify the HTTP method explicitly. <code>@GetMapping</code>, <code>@PostMapping</code>, <code>@PutMapping</code>, <code>@PatchMapping</code>, <code>@DeleteMapping</code> are <strong>composed annotations</strong> — shortcuts for <code>@RequestMapping(method = RequestMethod.GET)</code> etc.
                <br/><br/>The shorthand versions are preferred for readability. <code>@RequestMapping</code> is still useful at the class level to define a base path for all methods in a controller.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>@RestController
@RequestMapping("/api/users")       // base path for all methods
class UserController {

    @GetMapping("/{id}")            // GET /api/users/{id}
    User getById(@PathVariable Long id) { ... }

    @PostMapping                    // POST /api/users
    User create(@RequestBody UserDto dto) { ... }

    @DeleteMapping("/{id}")         // DELETE /api/users/{id}
    void delete(@PathVariable Long id) { ... }
}</code></pre>
              </div>`
          }
        ]
      },
      // ════════════════════════════════════════
      //  DAY 10
      // ════════════════════════════════════════
      {
        id:     'day10',
        day:    10,
        title:  'DevOps & Production',
        topics: ['Docker', 'Kubernetes', 'CI/CD', 'ConfigMap', 'WAR Room', 'Observability', 'Performance', 'REST Design', 'N+1 Query', 'API Versioning'],
        questions: [
          // ── Q1
          {
            q:   'What is the difference between a Docker image and a container?',
            tag: 'easy',
            body: `
              <p class="accordion-answer">
                <strong>Explanation:</strong> The image vs container distinction is foundational to understanding Docker.<br/><br/>
                <strong>Interview Answer:</strong>
                <br/>• <strong>Image</strong> — a read-only, layered, immutable snapshot built from a <code>Dockerfile</code>. Stored in a registry (Docker Hub, ECR, GCR). Think of it as a blueprint.
                <br/>• <strong>Container</strong> — a running (or stopped) instance of an image with its own writable layer, isolated filesystem, network stack, and process space. Think of it as the house built from the blueprint.
                <br/><br/>Many containers can run from the same image simultaneously. Deleting a container doesn't affect the image.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Shell</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code># Build image from Dockerfile
docker build -t myapp:1.0 .

# Run a container from the image
docker run -d -p 8080:8080 --name myapp myapp:1.0

# List running containers
docker ps

# List images
docker images</code></pre>
              </div>`
          },
          // ── Q2
          {
            q:   'What is a Dockerfile and what are its key instructions?',
            tag: 'easy',
            body: `
              <p class="accordion-answer">
                <strong>Explanation:</strong> A Dockerfile is the recipe for building a Docker image — knowing common instructions is essential.<br/><br/>
                <strong>Interview Answer:</strong> A <code>Dockerfile</code> is a text file containing ordered instructions that Docker reads to build an image layer by layer. Key instructions:
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Text</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>Instruction   Purpose
-----------   --------------------------------------------------
FROM          Base image (e.g., eclipse-temurin:21-jre)
WORKDIR       Set working directory inside container
COPY / ADD    Copy files from host to image
RUN           Execute commands during build (install deps, build)
EXPOSE        Document the port the container listens on
ENV           Set environment variables
ENTRYPOINT    Primary command that always runs
CMD           Default arguments to ENTRYPOINT (overridable)</code></pre>
              </div>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Dockerfile</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>FROM eclipse-temurin:21-jre-alpine
WORKDIR /app
COPY target/myapp.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]</code></pre>
              </div>`
          },
          // ── Q3
          {
            q:   'What is a Container Registry and how does the build-push-pull workflow work?',
            tag: 'easy',
            body: `
              <p class="accordion-answer">
                <strong>Explanation:</strong> Registries are the distribution mechanism for Docker images — central to any CI/CD pipeline.<br/><br/>
                <strong>Interview Answer:</strong> A <strong>Container Registry</strong> is a repository for storing and distributing Docker images. Examples: Docker Hub (public), Amazon ECR, Google GCR, Azure ACR, JFrog Artifactory.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Shell</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code># Build with a registry-qualified tag
docker build -t 123456789.dkr.ecr.us-east-1.amazonaws.com/myapp:1.0 .

# Authenticate (AWS ECR example)
aws ecr get-login-password | docker login --username AWS --password-stdin &lt;registry&gt;

# Push to registry
docker push 123456789.dkr.ecr.us-east-1.amazonaws.com/myapp:1.0

# Pull on another machine / in Kubernetes
docker pull 123456789.dkr.ecr.us-east-1.amazonaws.com/myapp:1.0</code></pre>
              </div>`
          },
          // ── Q4
          {
            q:   'What is a CI/CD pipeline and what are the stages in a GitHub Actions workflow?',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Explanation:</strong> CI/CD automates the build-test-deploy cycle — essential knowledge for modern backend developers.<br/><br/>
                <strong>Interview Answer:</strong> <strong>CI (Continuous Integration)</strong> — automatically build and test code on every push/PR to catch bugs early. <strong>CD (Continuous Delivery/Deployment)</strong> — automatically deliver tested code to an environment.
                <br/><br/>Typical GitHub Actions pipeline for a Spring Boot app:
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Text</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>Trigger (push / PR to main)
     │
     ▼
1. Checkout code          (actions/checkout)
2. Set up Java            (actions/setup-java)
3. Build & Unit Tests     (mvn clean verify)
4. SonarQube Scan         (code quality, coverage, vulnerabilities)
5. Build Docker Image     (docker build)
6. Push to Registry       (docker push)
7. Deploy to Kubernetes   (kubectl apply / Helm upgrade)
8. Post-deploy smoke test (curl /actuator/health)</code></pre>
              </div>`
          },
          // ── Q5
          {
            q:   'Explain the Kubernetes Pod, Deployment, and Service relationship.',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Explanation:</strong> Three core Kubernetes resources — each serves a distinct role in deploying and exposing an application.<br/><br/>
                <strong>Interview Answer:</strong>
                <br/>• <strong>Pod</strong> — smallest deployable unit. One or more containers sharing network and storage. Ephemeral — if it dies, it's gone (unless managed).
                <br/>• <strong>ReplicaSet</strong> — ensures a specified number of Pod replicas are always running. Recreates crashed Pods.
                <br/>• <strong>Deployment</strong> — manages a ReplicaSet; adds rolling updates, rollbacks, and declarative desired-state config. The resource you interact with for app deployments.
                <br/>• <strong>Service</strong> — stable virtual IP + DNS name for a set of Pods (selected by label). Provides load balancing across Pod instances. Types: ClusterIP (internal), NodePort, LoadBalancer (external).
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Shell</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code># Deploy app
kubectl apply -f deployment.yaml

# Scale
kubectl scale deployment myapp --replicas=5

# Rolling update (zero-downtime)
kubectl set image deployment/myapp myapp=myapp:2.0

# Rollback if issues
kubectl rollout undo deployment/myapp

# Expose via service
kubectl expose deployment myapp --port=80 --target-port=8080 --type=LoadBalancer</code></pre>
              </div>`
          },
          // ── Q6
          {
            q:   'What is a ConfigMap in Kubernetes and how does it work?',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Explanation:</strong> ConfigMap decouples configuration from container images — a key 12-factor app principle.<br/><br/>
                <strong>Interview Answer:</strong> A <strong>ConfigMap</strong> is a Kubernetes object that stores non-sensitive configuration data as key-value pairs (or entire config files). Your application image stays environment-agnostic; the config is injected at deploy time. Kubernetes injects ConfigMap values as:
                <br/>• <strong>Environment variables</strong> — <code>envFrom</code> / <code>env.valueFrom.configMapKeyRef</code>.
                <br/>• <strong>Mounted files</strong> — mount the ConfigMap as a volume; each key becomes a file.
                <br/><br/><strong>Secret</strong> is the equivalent for sensitive data (passwords, tokens) — base64 encoded, with RBAC controls and optional encryption at rest.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Shell</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code># Create ConfigMap
kubectl create configmap app-config \
  --from-literal=SPRING_PROFILES_ACTIVE=prod \
  --from-literal=DB_URL=jdbc:postgresql://db:5432/mydb

# Inject as env vars in Deployment
envFrom:
  - configMapRef:
      name: app-config</code></pre>
              </div>`
          },
          // ── Q7
          {
            q:   'What are the pillars of observability in production?',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Explanation:</strong> Observability is the ability to understand system state from its outputs — critical for production support.<br/><br/>
                <strong>Interview Answer:</strong> The three pillars:
                <br/>• <strong>Logs</strong> — timestamped, contextual event records. Structured JSON format (with request ID, user ID) is preferred over plain text. Tools: ELK Stack (Elasticsearch + Logstash + Kibana), Grafana Loki.
                <br/>• <strong>Metrics</strong> — numeric measurements over time (latency p99, error rate, CPU, memory, JVM GC time). Collected by Micrometer, scraped by Prometheus, visualised in Grafana.
                <br/>• <strong>Traces</strong> — end-to-end journey of a single request across multiple services. Correlation via Trace ID propagated in headers. Tools: OpenTelemetry → Jaeger or Zipkin.
                <br/><br/>Add <strong>Alerts</strong> on SLO thresholds (e.g., error rate &gt; 1% → PagerDuty). A fourth pillar in some frameworks.
              </p>`
          },
          // ── Q8
          {
            q:   'What is a WAR Room and what do you do in one?',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Explanation:</strong> WAR room knowledge demonstrates production support maturity — highly valued by interviewers from enterprise backgrounds.<br/><br/>
                <strong>Interview Answer:</strong> A <strong>WAR (War Room)</strong> is an emergency virtual or physical meeting triggered by a critical production incident (P0/P1) — e.g., app down, API errors, data issue, SLA breach. All relevant teams join: backend devs, DevOps, QA, DBA, product manager.
                <br/><br/><strong>WAR Room process:</strong>
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Text</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>1. Understand → What is failing? Which service? What error?
2. Check Logs  → App logs, kubectl logs, Kibana / Splunk
3. Root Cause  → Code bug? DB issue? Config wrong? Deployment change?
4. Fix         → Rollback deployment / restart pod / fix config / patch code
5. Validate    → Test APIs, check metrics, confirm logs are clean
6. Close       → Confirm resolved, inform stakeholders, timeline
7. Post-mortem → RCA document, preventive actions, add monitoring/alerts</code></pre>
              </div>
              <p class="accordion-answer" style="margin-top:10px;">
                <strong>Interview answer tip:</strong> "A WAR room is created during P0/P1 production incidents. As a developer I check application logs, identify if a recent deployment caused the issue, help rollback if needed, fix the root cause, and contribute to the post-incident RCA to prevent recurrence."
              </p>`
          },
          // ── Q9
          {
            q:   'Your app is slow after running for 2 hours. How do you debug it?',
            tag: 'hard',
            body: `
              <p class="accordion-answer">
                <strong>Explanation:</strong> A real production scenario question — systematic debugging approach is what they're evaluating.<br/><br/>
                <strong>Interview Answer:</strong> This symptom suggests a resource leak or gradual accumulation issue. Systematic approach:
                <br/>1. <strong>Check metrics</strong> — Grafana: Is heap memory growing steadily? Is GC time increasing? Is thread count rising? Is DB connection pool exhausted?
                <br/>2. <strong>Heap memory growing</strong> → likely <strong>memory leak</strong>. Take heap dump (<code>jmap -dump:live,format=b,file=heap.hprof &lt;pid&gt;</code>) and analyse in Eclipse MAT or VisualVM. Look for unexpectedly large retained objects.
                <br/>3. <strong>Thread count rising</strong> → thread leak. Check <code>/actuator/threaddump</code> for blocked/stuck threads. Likely a thread pool not cleaning up properly.
                <br/>4. <strong>DB slow</strong> → check slow query log. Look for N+1 queries, missing indexes, connection pool saturation.
                <br/>5. <strong>Response times increasing</strong> → check external dependency latency (Redis, 3rd-party APIs). Add circuit breaker.
                <br/>6. Apply fix, redeploy, monitor.
              </p>`
          },
          // ── Q10
          {
            q:   'What are the common causes of <code>OutOfMemoryError</code>?',
            tag: 'hard',
            body: `
              <p class="accordion-answer">
                <strong>Explanation:</strong> OOM is one of the most serious production errors — knowing the variants shows JVM expertise.<br/><br/>
                <strong>Interview Answer:</strong>
                <br/>• <strong>Java heap space</strong> — too many live objects or a memory leak. Fix: increase <code>-Xmx</code> and/or fix the leak.
                <br/>• <strong>GC overhead limit exceeded</strong> — JVM spends &gt;98% time in GC, reclaiming &lt;2%. Almost always a leak. Fix: heap dump analysis.
                <br/>• <strong>Metaspace</strong> — too many classes loaded (dynamic class generation, hot redeploy). Fix: <code>-XX:MaxMetaspaceSize</code>, fix classloader leaks.
                <br/>• <strong>Unable to create new native thread</strong> — OS ulimit on threads hit. Fix: reduce thread pool sizes, increase OS limit, decrease stack size (<code>-Xss</code>).
                <br/>• <strong>Direct buffer memory</strong> — off-heap NIO buffers exhausted. Fix: <code>-XX:MaxDirectMemorySize</code>.
                <br/><br/><strong>Diagnosis:</strong> Enable <code>-XX:+HeapDumpOnOutOfMemoryError -XX:HeapDumpPath=/tmp/oom.hprof</code> to auto-capture a dump.
              </p>`
          },
          // ── Q11
          {
            q:   'How would you handle 1 lakh (100,000) requests per minute?',
            tag: 'hard',
            body: `
              <p class="accordion-answer">
                <strong>Explanation:</strong> A system design / scalability question — shows architectural thinking beyond code.<br/><br/>
                <strong>Interview Answer:</strong> 100K RPM ≈ 1,667 RPS. Approach:
                <br/>1. <strong>Horizontal scaling</strong> — run multiple instances behind a load balancer. Kubernetes HPA (Horizontal Pod Autoscaler) scales based on CPU/RPS.
                <br/>2. <strong>Stateless services</strong> — no server-side sessions; use JWT or Redis-based sessions so any instance can handle any request.
                <br/>3. <strong>Caching</strong> — Redis/Memcached for frequently read data. Reduce DB hits. Cache at service layer or CDN level.
                <br/>4. <strong>Database</strong> — connection pooling (HikariCP), read replicas for read-heavy workloads, query optimisation, indexes.
                <br/>5. <strong>Async processing</strong> — offload heavy work to Kafka/RabbitMQ message queues; respond immediately with 202 Accepted.
                <br/>6. <strong>Rate limiting</strong> — at API Gateway level to protect downstream services.
                <br/>7. <strong>Circuit breakers</strong> — prevent cascade failures when dependencies slow down.
              </p>`
          },
          // ── Q12
          {
            q:   'How do you prevent a background job from running twice (duplicate processing)?',
            tag: 'hard',
            body: `
              <p class="accordion-answer">
                <strong>Explanation:</strong> Distributed job deduplication is a common real-world problem, especially in microservices with multiple instances.<br/><br/>
                <strong>Interview Answer:</strong> Strategies:
                <br/>• <strong>Distributed lock (Redis SETNX / Redisson)</strong> — acquire a lock before running; only one instance acquires it. Release after completion or on timeout.
                <br/>• <strong>Database flag</strong> — use a <code>status</code> column (<code>PENDING → PROCESSING → DONE</code>); update atomically (<code>UPDATE WHERE status='PENDING'</code>). Only the row updated (affected=1) proceeds.
                <br/>• <strong>Idempotent processing</strong> — track processed message IDs; skip if already seen (Redis SET / DB unique constraint).
                <br/>• <strong>Shedlock</strong> — Spring integration (<code>@SchedulerLock</code>) uses a DB/Redis-backed lock for scheduled tasks. Easiest for Spring Boot apps.
                <br/>• <strong>Message queue consumer groups</strong> — Kafka consumer groups ensure each partition is consumed by exactly one consumer in a group.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>// ShedLock — prevent concurrent @Scheduled execution across instances
@Scheduled(cron = "0 0 * * * *")
@SchedulerLock(name = "hourlyJob", lockAtLeastFor = "PT50M", lockAtMostFor = "PT60M")
void hourlyJob() {
    // runs on exactly one instance per hour
}</code></pre>
              </div>`
          },
          // ── Q13
          {
            q:   'What is the N+1 query problem in Hibernate and how do you fix it?',
            tag: 'hard',
            body: `
              <p class="accordion-answer">
                <strong>Explanation:</strong> The N+1 problem is one of the most common performance killers in JPA/Hibernate applications.<br/><br/>
                <strong>Interview Answer:</strong> The N+1 problem occurs when fetching a list of N entities causes N additional queries to load a lazily-fetched association — 1 query for the list + N queries for each item's association = N+1 total.
                <br/><br/><strong>Example:</strong> Fetch 100 Orders → then access each Order's <code>items</code> → 100 separate queries for items.
                <br/><br/><strong>Fixes:</strong>
                <br/>• <strong>JOIN FETCH</strong> — load association in a single query in JPQL.
                <br/>• <strong>@EntityGraph</strong> — declarative fetch plan without modifying the query.
                <br/>• <strong>Batch fetching</strong> — <code>@BatchSize(size=25)</code> loads 25 associations per query instead of 1 (reduces N+1 to N/25+1).
                <br/>• <strong>DTO projection</strong> — select only required columns with a constructor expression; no lazy proxy involved.
                <br/><br/>Detect it: enable SQL logging (<code>spring.jpa.show-sql=true</code>) or use <code>p6spy</code> / <code>datasource-proxy</code>.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>// ❌ N+1 — 1 query for orders + N queries for items
List&lt;Order&gt; orders = orderRepo.findAll();
orders.forEach(o -&gt; o.getItems().size()); // each triggers a query

// ✅ Fix — single query with JOIN FETCH
@Query("SELECT o FROM Order o JOIN FETCH o.items")
List&lt;Order&gt; findAllWithItems();

// ✅ Fix — @EntityGraph
@EntityGraph(attributePaths = {"items"})
List&lt;Order&gt; findAll();</code></pre>
              </div>`
          },
          // ── Q14
          {
            q:   'How do you design a REST API? What are the key principles?',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Explanation:</strong> REST design principles are tested in senior developer and architect interviews.<br/><br/>
                <strong>Interview Answer:</strong> Key REST design principles:
                <br/>• <strong>Resource-based URLs</strong> — nouns, not verbs. <code>/orders/123</code> not <code>/getOrder?id=123</code>.
                <br/>• <strong>HTTP methods for operations</strong> — GET (read), POST (create), PUT/PATCH (update), DELETE (remove).
                <br/>• <strong>HTTP status codes</strong> — 200 OK, 201 Created, 204 No Content, 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found, 409 Conflict, 500 Internal Error.
                <br/>• <strong>Stateless</strong> — each request contains all the info needed; no server-side session.
                <br/>• <strong>Consistent error format</strong> — always return structured JSON: <code>{"error":"RESOURCE_NOT_FOUND","message":"..."}</code>.
                <br/>• <strong>Versioning</strong> — <code>/api/v1/users</code> in the path or <code>Accept: application/vnd.myapi.v1+json</code> header.
                <br/>• <strong>Pagination</strong> — never return unbounded lists. Use <code>?page=0&amp;size=20</code>.
                <br/>• <strong>HATEOAS</strong> (optional) — include links to related resources in responses.
              </p>`
          },
          // ── Q15
          {
            q:   'How do you version APIs without breaking existing clients?',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Explanation:</strong> API versioning is essential for evolving a public or microservice API while maintaining backward compatibility.<br/><br/>
                <strong>Interview Answer:</strong> Three common strategies:
                <br/>1. <strong>URL path versioning</strong> — <code>/api/v1/users</code>, <code>/api/v2/users</code>. Most visible and commonly used. Easy to document, test, and route.
                <br/>2. <strong>Header versioning</strong> — client sends <code>Accept: application/vnd.company.api-v2+json</code>. Clean URLs but less discoverable.
                <br/>3. <strong>Query param versioning</strong> — <code>/api/users?version=2</code>. Simple but not REST-idiomatic.
                <br/><br/><strong>Best practices:</strong>
                <br/>• Maintain v1 until clients migrate; deprecate with a sunset date in response headers.
                <br/>• Never make breaking changes within a version (removing fields, changing types).
                <br/>• Additive changes (new optional fields) are non-breaking.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>@RestController
@RequestMapping("/api/v1/users")
class UserV1Controller {
    @GetMapping("/{id}")
    UserV1Dto getUser(@PathVariable Long id) { ... }
}

@RestController
@RequestMapping("/api/v2/users")
class UserV2Controller {
    @GetMapping("/{id}")
    UserV2Dto getUser(@PathVariable Long id) { ... }  // enriched response
}</code></pre>
              </div>`
          }
        ]
      },
      // ════════════════════════════════════════
      //  DAY 11
      // ════════════════════════════════════════
      {
        id:     'day11',
        day:    11,
        title:  'React Fundamentals',
        topics: ['What is React', 'JSX', 'Virtual DOM', 'Components', 'Props & State', 'useState', 'Keys', 'Controlled vs Uncontrolled', 'Side Effects', 'Prop Drilling', 'Error Boundaries'],
        questions: [
          {
            q:   'What is React?',
            tag: 'easy',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> React is an open-source JavaScript <strong>library</strong> (not a framework) developed by Meta (Facebook) for building <strong>fast, interactive user interfaces</strong>. It is based on a <strong>component-based architecture</strong> — the UI is split into small, reusable, self-contained pieces called components. React efficiently updates the browser DOM using a <strong>Virtual DOM</strong> diffing algorithm, re-rendering only the parts of the UI that actually changed.
                <br/><br/>Key characteristics:
                <br/>• <strong>Declarative</strong> — you describe <em>what</em> the UI should look like for a given state; React handles the DOM updates.
                <br/>• <strong>Component-based</strong> — components manage their own state and compose into complex UIs.
                <br/>• <strong>Learn once, write anywhere</strong> — React powers web apps, mobile apps (React Native), and server rendering (Next.js).
              </p>`
          },
          {
            q:   'What are the advantages of using React?',
            tag: 'easy',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong>
                <br/>• <strong>Virtual DOM</strong> — only changed parts of the real DOM are updated, making rendering fast.
                <br/>• <strong>Component reusability</strong> — build once, use everywhere; promotes DRY code.
                <br/>• <strong>Unidirectional data flow</strong> — data flows from parent to child, making state predictable and easier to debug.
                <br/>• <strong>Rich ecosystem</strong> — React Router (navigation), Redux/Zustand (state), React Query (data fetching), Storybook (UI dev), etc.
                <br/>• <strong>Hooks</strong> — functional components with state and side-effects, reducing boilerplate vs class components.
                <br/>• <strong>JSX</strong> — JavaScript + HTML in one file; more intuitive and type-safe with TypeScript.
                <br/>• <strong>Strong community &amp; Meta backing</strong> — large talent pool, extensive documentation, long-term support.
                <br/>• <strong>React Native</strong> — share business logic across web and mobile.
              </p>`
          },
          {
            q:   'What are the limitations of React?',
            tag: 'easy',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong>
                <br/>• <strong>Only the View layer</strong> — React handles UI only. You need additional libraries for routing (React Router), state management (Redux), HTTP calls (Axios), etc. This increases decision fatigue.
                <br/>• <strong>JSX learning curve</strong> — mixing HTML in JavaScript feels unusual to beginners.
                <br/>• <strong>Fast-moving ecosystem</strong> — frequent updates (Hooks replaced class components; RSC is now evolving); staying current requires continuous learning.
                <br/>• <strong>Poor SEO out-of-the-box</strong> — client-side rendering means search crawlers see an empty HTML shell. Requires SSR (Next.js) for SEO.
                <br/>• <strong>Boilerplate</strong> — setting up a production React project (Webpack, Babel, ESLint, testing, styling) requires considerable configuration (though Vite and CRA reduce this).
                <br/>• <strong>Re-render performance</strong> — large component trees can have unnecessary re-renders if not managed carefully with <code>memo</code>, <code>useMemo</code>, <code>useCallback</code>.
              </p>`
          },
          {
            q:   'What is JSX?',
            tag: 'easy',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> JSX (JavaScript XML) is a <strong>syntax extension</strong> for JavaScript that lets you write HTML-like markup directly inside JavaScript. It is <em>not</em> valid JavaScript — Babel (or the TypeScript compiler) transpiles it to <code>React.createElement()</code> calls.
                <br/><br/>Key rules:
                <br/>• Must return a <strong>single root element</strong> (wrap in <code>&lt;div&gt;</code> or <code>&lt;&gt;&lt;/&gt;</code> Fragment).
                <br/>• All tags must be <strong>closed</strong> (<code>&lt;br /&gt;</code>, <code>&lt;img /&gt;</code>).
                <br/>• Use <code>className</code> instead of <code>class</code>, and <code>htmlFor</code> instead of <code>for</code> (reserved JS words).
                <br/>• Embed JavaScript expressions in <code>{}</code> curly braces.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">JSX</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>// JSX
const el = &lt;h1 className="title"&gt;Hello, {name}!&lt;/h1&gt;;

// Compiled to
const el = React.createElement("h1", { className: "title" }, "Hello, " + name + "!");</code></pre>
              </div>`
          },
          {
            q:   'What is the Virtual DOM? How does React use it to render the UI?',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> The <strong>Virtual DOM (VDOM)</strong> is a lightweight, in-memory JavaScript representation of the real browser DOM tree. React keeps a copy of the VDOM. When state/props change, React:
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Text</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>1. Re-renders → Creates a NEW Virtual DOM tree
2. Diff       → Compares new VDOM vs previous VDOM (reconciliation / diffing algorithm)
3. Patch      → Calculates minimal set of real DOM operations needed
4. Commit     → Applies only those changes to the real browser DOM (batched)</code></pre>
              </div>
              <p class="accordion-answer" style="margin-top:10px;">
                <strong>Why this is fast:</strong> Real DOM operations (layout, paint, reflow) are expensive. By computing differences in cheap JavaScript objects first and batching updates, React minimises costly real DOM mutations.
                <br/><br/><strong>Reconciliation keys:</strong> React uses the element <code>type</code> and <code>key</code> prop to decide whether to reuse, update, or recreate DOM nodes.
              </p>`
          },
          {
            q:   'What are the differences between functional and class components?',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong>
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Text</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>Feature              Functional Component        Class Component
-----------------    --------------------------  --------------------------------
Syntax               JavaScript function          ES6 class extends React.Component
State                useState(), useReducer()     this.state / this.setState()
Lifecycle            useEffect() hook             componentDidMount, componentDidUpdate, etc.
this keyword         Not used                     Required (often causes bugs)
Boilerplate          Minimal                      Verbose (constructor, bind, render())
Performance          Slightly lighter             Slightly heavier
Hooks support        Yes (all hooks)              No (cannot use hooks)
Modern React         ✅ Preferred                  ❌ Legacy (still supported)</code></pre>
              </div>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">JSX</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>// Functional (modern)
const Greeting = ({ name }) =&gt; &lt;h1&gt;Hello, {name}!&lt;/h1&gt;;

// Class (legacy)
class Greeting extends React.Component {
  render() { return &lt;h1&gt;Hello, {this.props.name}!&lt;/h1&gt;; }
}</code></pre>
              </div>`
          },
          {
            q:   'What are props in React?',
            tag: 'easy',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> <strong>Props</strong> (short for properties) are <strong>read-only inputs</strong> passed from a parent component to a child component. They are the primary mechanism for component communication in React.
                <br/><br/>Key characteristics:
                <br/>• <strong>Immutable</strong> — a component must never modify its own props (<em>"Props flow down, events flow up"</em>).
                <br/>• <strong>Any type</strong> — props can be strings, numbers, objects, arrays, functions, or even JSX.
                <br/>• <strong>Default props</strong> — <code>defaultProps</code> or default parameter values provide fallbacks.
                <br/>• <strong>PropTypes</strong> — runtime type-checking (or TypeScript interfaces for compile-time).
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">JSX</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>// Parent passes props
&lt;UserCard name="Alice" age={30} onDelete={handleDelete} /&gt;

// Child receives and uses props (destructured)
const UserCard = ({ name, age, onDelete }) =&gt; (
  &lt;div&gt;
    &lt;h2&gt;{name}&lt;/h2&gt;
    &lt;p&gt;Age: {age}&lt;/p&gt;
    &lt;button onClick={onDelete}&gt;Delete&lt;/button&gt;
  &lt;/div&gt;
);</code></pre>
              </div>`
          },
          {
            q:   'What is <code>useState()</code> in React?',
            tag: 'easy',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> <code>useState</code> is a React Hook that lets you add <strong>reactive state</strong> to a functional component. When the state value changes, React re-renders the component with the new value.
                <br/><br/><code>const [state, setState] = useState(initialValue)</code>
                <br/>• <code>state</code> — the current value.
                <br/>• <code>setState</code> — function to update the value (triggers re-render).
                <br/>• <code>initialValue</code> — the starting value (set only on first render; can be a lazy initialiser function for expensive computations).
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">JSX</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>function Counter() {
  const [count, setCount] = useState(0);

  return (
    &lt;div&gt;
      &lt;p&gt;Count: {count}&lt;/p&gt;
      &lt;button onClick={() =&gt; setCount(c =&gt; c + 1)}&gt;+&lt;/button&gt;
      // ↑ functional update form — safe when new state depends on old state
    &lt;/div&gt;
  );
}</code></pre>
              </div>`
          },
          {
            q:   'What are keys in React and why are they important?',
            tag: 'easy',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> <code>key</code> is a special prop that helps React identify which items in a <strong>list</strong> have changed, been added, or removed. React uses keys during reconciliation to efficiently update only the items that changed rather than re-rendering the entire list.
                <br/><br/><strong>Rules:</strong>
                <br/>• Must be <strong>unique among siblings</strong> (not globally).
                <br/>• Should be <strong>stable</strong> — use a unique ID from data, not array index (index causes bugs when list order changes).
                <br/>• Keys are not passed as props to the component — they are internal React identifiers.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">JSX</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>// ✅ Good — stable unique ID
{users.map(user =&gt; &lt;UserCard key={user.id} user={user} /&gt;)}

// ❌ Bad — index as key (breaks on reorder/delete)
{users.map((user, i) =&gt; &lt;UserCard key={i} user={user} /&gt;)}</code></pre>
              </div>`
          },
          {
            q:   'Explain React state and props together.',
            tag: 'easy',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong>
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Text</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>Feature      Props                            State
---------    -------------------------------  ----------------------------
Owner        Set by PARENT                    Managed by the component ITSELF
Mutability   Immutable (read-only in child)   Mutable (via setState/useState)
Purpose      Pass data & callbacks down       Track data that changes over time
When used    Configuration / communication    User interactions, API responses
Re-render    Parent re-renders → child gets   setState() → triggers component re-render
             new props automatically</code></pre>
              </div>
              <p class="accordion-answer" style="margin-top:10px;">Think of props as function arguments and state as variables declared inside the function — both together describe the component's output at any point in time.</p>`
          },
          {
            q:   'What are the differences between controlled and uncontrolled components?',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong>
                <br/>• <strong>Controlled Component</strong> — the form element's value is controlled by React state. Every change is handled by an <code>onChange</code> handler that updates state. The input is always in sync with the component's state — React is the "single source of truth."
                <br/>• <strong>Uncontrolled Component</strong> — the form element stores its own value in the real DOM. You access the value using a <code>ref</code> when needed (e.g., on form submit). Less React-idiomatic.
                <br/><br/>Controlled is preferred for validation, conditional disabling, and format-as-you-type features.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">JSX</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>// ✅ Controlled — React drives the value
const [name, setName] = useState('');
&lt;input value={name} onChange={e =&gt; setName(e.target.value)} /&gt;

// Uncontrolled — DOM drives the value
const inputRef = useRef(null);
&lt;input ref={inputRef} /&gt;
// Read on submit: inputRef.current.value</code></pre>
              </div>`
          },
          {
            q:   'Explain about types of side effects in a React component.',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> A <strong>side effect</strong> is any operation that reaches outside the component's pure render function — interacting with the outside world.
                <br/><br/><strong>Side effects that need cleanup</strong> (subscriptions, timers, event listeners):
                <br/>• WebSocket/event subscriptions — must unsubscribe on unmount to prevent memory leaks.
                <br/>• <code>setInterval</code> / <code>setTimeout</code> — must clear on unmount.
                <br/>• Manual DOM manipulation.
                <br/><br/><strong>Side effects that do NOT need cleanup:</strong>
                <br/>• API/data fetching (<code>fetch</code>, Axios).
                <br/>• Logging / analytics.
                <br/>• Updating the document title.
                <br/><br/>All side effects in functional components live inside <code>useEffect</code>. Return a cleanup function for effects that need it.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">JSX</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>useEffect(() =&gt; {
  const id = setInterval(fetchData, 5000);  // side effect with cleanup
  return () =&gt; clearInterval(id);           // cleanup on unmount/re-run
}, []);                                      // empty deps = run once after mount</code></pre>
              </div>`
          },
          {
            q:   'What is prop drilling in React?',
            tag: 'easy',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> <strong>Prop drilling</strong> is the pattern where you pass props through multiple layers of intermediate components that don't need the data themselves — just to get it to a deeply nested child component.
                <br/><br/><strong>Problems:</strong> Intermediate components become coupled to data they don't use; changes to the data shape require updating multiple files.
                <br/><br/><strong>Solutions:</strong>
                <br/>• <strong>React Context API</strong> — broadcast data to any component in the tree without passing props.
                <br/>• <strong>Component composition</strong> — pass components as children instead of raw data.
                <br/>• <strong>State management libraries</strong> (Redux, Zustand, Jotai) — global stores accessible from anywhere.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Text</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>// ❌ Prop drilling — B and C don't need "user" but must pass it
App (user) → ComponentA (user) → ComponentB (user) → ComponentC uses user

// ✅ Context — ComponentC accesses user directly
&lt;UserContext.Provider value={user}&gt;
  &lt;ComponentA /&gt;  ← no user prop needed
&lt;/UserContext.Provider&gt;</code></pre>
              </div>`
          },
          {
            q:   'What are error boundaries in React?',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> An <strong>error boundary</strong> is a React class component that catches JavaScript errors anywhere in its child component tree during rendering, in lifecycle methods, or in constructors — and displays a fallback UI instead of crashing the entire application.
                <br/><br/><strong>Key points:</strong>
                <br/>• Implemented with <code>static getDerivedStateFromError()</code> (update state to show fallback) and <code>componentDidCatch()</code> (log the error).
                <br/>• Only available as <strong>class components</strong> (no hook equivalent yet, though React 19 may change this).
                <br/>• Do <strong>NOT</strong> catch errors in: event handlers (use try/catch), async code, SSR, or errors thrown in the boundary itself.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">JSX</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    logToMonitoring(error, info);
  }

  render() {
    return this.state.hasError
      ? &lt;h2&gt;Something went wrong.&lt;/h2&gt;
      : this.props.children;
  }
}

// Usage
&lt;ErrorBoundary&gt;&lt;UserDashboard /&gt;&lt;/ErrorBoundary&gt;</code></pre>
              </div>`
          },
          {
            q:   'What is React Hooks?',
            tag: 'easy',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> React Hooks are <strong>functions</strong> (introduced in React 16.8) that let you use React features — like state and lifecycle effects — inside <strong>functional components</strong>, without writing class components.
                <br/><br/><strong>Core built-in Hooks:</strong>
                <br/>• <code>useState</code> — add state.
                <br/>• <code>useEffect</code> — side effects (data fetch, subscriptions, DOM updates).
                <br/>• <code>useContext</code> — consume context values.
                <br/>• <code>useRef</code> — mutable refs, DOM access.
                <br/>• <code>useMemo</code> — memoize expensive computations.
                <br/>• <code>useCallback</code> — memoize functions.
                <br/>• <code>useReducer</code> — complex state logic.
                <br/><br/><strong>Why Hooks were introduced:</strong> Class components had issues with complex lifecycle methods mixing unrelated logic, difficulty in reusing stateful logic between components, and the confusing <code>this</code> keyword.
              </p>`
          }
        ]
      },
      // ════════════════════════════════════════
      //  DAY 12
      // ════════════════════════════════════════
      {
        id:     'day12',
        day:    12,
        title:  'React Hooks',
        topics: ['Rules of Hooks', 'useEffect', 'useRef', 'Custom Hooks', 'Types of Hooks', 'Hooks vs Classes', 'useContext', 'useState vs useReducer'],
        questions: [
          {
            q:   'What are the rules that must be followed while using React Hooks?',
            tag: 'easy',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> The two official Rules of Hooks:
                <br/><br/><strong>1. Only call Hooks at the top level</strong> — never call Hooks inside loops, conditions, or nested functions. React relies on the <em>order</em> of Hook calls being consistent on every render to associate Hook state with the correct variable. Breaking this causes state mismatches.
                <br/><br/><strong>2. Only call Hooks from React functions</strong> — call Hooks from functional components or from custom Hooks. Do not call them from regular JavaScript functions, class components, or event handlers outside components.
                <br/><br/>The <code>eslint-plugin-react-hooks</code> package enforces these rules automatically at build time.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">JSX</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>// ❌ WRONG — Hook inside condition
if (isLoggedIn) {
  const [user, setUser] = useState(null);  // violates rule 1
}

// ✅ CORRECT — always at top level
const [user, setUser] = useState(null);
if (isLoggedIn) { /* use user */ }</code></pre>
              </div>`
          },
          {
            q:   'What is the use of <code>useEffect</code> React Hook?',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> <code>useEffect</code> lets you perform <strong>side effects</strong> in functional components — replacing <code>componentDidMount</code>, <code>componentDidUpdate</code>, and <code>componentWillUnmount</code> lifecycle methods from class components.
                <br/><br/><strong>Signature:</strong> <code>useEffect(effectFn, dependencyArray)</code>
                <br/><br/><strong>Dependency array behaviour:</strong>
                <br/>• <code>[]</code> — runs only once after initial mount (equivalent to <code>componentDidMount</code>).
                <br/>• <code>[a, b]</code> — runs after mount + whenever <code>a</code> or <code>b</code> changes.
                <br/>• No array — runs after every render (⚠️ usually a performance issue).
                <br/><br/><strong>Cleanup:</strong> Return a function to clean up before the next effect run or before unmount.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">JSX</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>useEffect(() =&gt; {
  document.title = \`User: \${userId}\`;        // side effect

  const sub = subscribeToUser(userId);       // cleanup needed
  return () =&gt; sub.unsubscribe();            // cleanup function

}, [userId]);   // re-run whenever userId changes</code></pre>
              </div>`
          },
          {
            q:   'Why do React Hooks make use of refs?',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> Refs (<code>useRef</code>) serve two main purposes in React:
                <br/><br/><strong>1. Accessing DOM elements directly</strong> — attach to a JSX element via the <code>ref</code> attribute to call imperative DOM APIs (focus, scroll, measure dimensions) without triggering re-renders.
                <br/><br/><strong>2. Persisting a mutable value across renders without causing re-renders</strong> — <code>ref.current</code> is a plain object that survives re-renders but changing it does <em>not</em> trigger a re-render (unlike <code>useState</code>). Useful for storing timer IDs, previous values, or event handler references.
                <br/><br/>This is why Hooks use refs: to give functional components an equivalent of instance variables from class components.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">JSX</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>// 1. DOM access
const inputRef = useRef(null);
&lt;input ref={inputRef} /&gt;
const focusInput = () =&gt; inputRef.current.focus();

// 2. Mutable value (timer ID) without re-render
const timerId = useRef(null);
useEffect(() =&gt; {
  timerId.current = setInterval(tick, 1000);
  return () =&gt; clearInterval(timerId.current);
}, []);</code></pre>
              </div>`
          },
          {
            q:   'What are Custom Hooks?',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> A <strong>Custom Hook</strong> is a JavaScript function whose name starts with <code>use</code> and that calls other Hooks. Custom Hooks let you extract and <strong>reuse stateful logic</strong> across multiple components without duplicating code and without component hierarchy changes (unlike render props or HOCs).
                <br/><br/>Custom Hooks do <em>not</em> share state between components — each component that calls the hook gets its own isolated state.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">JSX</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>// Custom Hook — reusable fetch logic
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() =&gt; {
    fetch(url)
      .then(r =&gt; r.json())
      .then(setData)
      .catch(setError)
      .finally(() =&gt; setLoading(false));
  }, [url]);

  return { data, loading, error };
}

// Usage in any component
const { data, loading, error } = useFetch('/api/users');</code></pre>
              </div>`
          },
          {
            q:   'What are the types of built-in Hooks in React?',
            tag: 'easy',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong>
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Text</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>Category          Hooks
--------------    --------------------------------------------------
State             useState, useReducer
Context           useContext
Ref               useRef, useImperativeHandle
Effect            useEffect, useLayoutEffect, useInsertionEffect
Performance       useMemo, useCallback
Transition        useTransition, useDeferredValue (React 18)
ID                useId (React 18)
Debug             useDebugValue
Sync              useSyncExternalStore (React 18)</code></pre>
              </div>`
          },
          {
            q:   'Differentiate React Hooks vs Classes.',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong>
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Text</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>Aspect                Hooks (Functional)           Classes
-------------------   ---------------------------  ---------------------------------
State                 useState / useReducer         this.state, this.setState()
Lifecycle             useEffect combinations        componentDidMount/Update/WillUnmount
Code reuse            Custom Hooks                  HOC or Render Props (complex)
this keyword          Not needed                    Required everywhere (binding bugs)
Boilerplate           Minimal                       Verbose constructor, bind, render
Logic splitting       Multiple useEffect() calls    Mixed in single lifecycle methods
Error boundaries      ❌ Not possible               ✅ getDerivedStateFromError
Testing               Simpler (pure functions)      Slightly more complex
Community trend       ✅ Modern standard             ❌ Legacy (no removal planned)</code></pre>
              </div>`
          },
          {
            q:   'What is <code>useContext</code> and how does it work?',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> <code>useContext</code> lets a functional component <strong>read and subscribe to</strong> a React Context value without prop drilling. When the context value changes, the component re-renders automatically.
                <br/><br/><strong>Three steps:</strong> Create context → Provide value → Consume with <code>useContext</code>.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">JSX</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>// 1. Create
const ThemeContext = React.createContext('light');

// 2. Provide (high in the tree)
&lt;ThemeContext.Provider value="dark"&gt;
  &lt;App /&gt;
&lt;/ThemeContext.Provider&gt;

// 3. Consume (anywhere in the tree)
function Button() {
  const theme = useContext(ThemeContext);  // 'dark'
  return &lt;button className={theme}&gt;Click&lt;/button&gt;;
}</code></pre>
              </div>`
          },
          {
            q:   'How does the performance of using Hooks differ compared to classes?',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> In general, Hooks and class components have comparable performance. The differences:
                <br/><br/>• <strong>Bundle size</strong> — functional components with Hooks tend to produce smaller bundle sizes since class syntax requires Babel class transforms.
                <br/>• <strong>Memory</strong> — class instances carry method bindings and instance variables. Functional components are plain function calls — slightly lighter.
                <br/>• <strong>useCallback / useMemo</strong> — Hooks provide fine-grained memoisation that was harder to achieve cleanly in class components.
                <br/>• <strong>Concurrent Mode compatibility</strong> — Hooks are designed for React's Concurrent Mode (React 18) and work better with features like <code>useTransition</code> and <code>useDeferredValue</code>.
                <br/><br/><strong>Key fact:</strong> The React team has stated that the performance difference between Hooks and classes is negligible in most real-world applications. The advantages of Hooks are primarily in developer experience, code organisation, and reusability.
              </p>`
          },
          {
            q:   'Do Hooks cover all the functionalities provided by classes?',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> Hooks cover <em>almost</em> all class component functionality — but with one notable exception:
                <br/><br/><strong>What Hooks cover:</strong>
                <br/>• State — <code>useState</code>, <code>useReducer</code>.
                <br/>• Lifecycle — <code>useEffect</code> covers <code>componentDidMount</code>, <code>componentDidUpdate</code>, <code>componentWillUnmount</code>.
                <br/>• Context — <code>useContext</code>.
                <br/>• Refs, memoisation, etc.
                <br/><br/><strong>What Hooks do NOT cover:</strong>
                <br/>• <code>getSnapshotBeforeUpdate</code> — no Hook equivalent.
                <br/>• <strong>Error Boundaries</strong> (<code>getDerivedStateFromError</code> / <code>componentDidCatch</code>) — still require class components. The community uses libraries like <code>react-error-boundary</code> as a wrapper.
              </p>`
          },
          {
            q:   'Can React Hooks replace Redux?',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> For <strong>simple to medium</strong> state management, yes — <code>useContext + useReducer</code> can replace Redux. For <strong>complex, large-scale applications</strong>, Redux (or modern alternatives like Zustand, Jotai) still has advantages.
                <br/><br/><strong>When useContext + useReducer is enough:</strong>
                <br/>• Small/medium apps with limited global state.
                <br/>• State shared between a few components.
                <br/><br/><strong>Where Redux still wins:</strong>
                <br/>• <strong>Performance</strong> — Context re-renders all consumers on every update; Redux uses selectors to re-render only affected components.
                <br/>• <strong>DevTools</strong> — Redux DevTools (time-travel debugging, action log) are far more powerful.
                <br/>• <strong>Middleware</strong> — Redux Thunk / Saga for complex async flows.
                <br/>• <strong>Large apps</strong> with many independent state slices.
                <br/><br/><strong>Modern alternative:</strong> <strong>Zustand</strong> or <strong>Jotai</strong> — lightweight libraries that are simpler than Redux but more performant than Context.
              </p>`
          },
          {
            q:   'Does React Hook work with static typing (TypeScript)?',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> Yes — React Hooks work excellently with TypeScript. All built-in Hooks have full TypeScript generic type support.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">TypeScript</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>// useState with type
const [user, setUser] = useState&lt;User | null&gt;(null);

// useRef with type
const inputRef = useRef&lt;HTMLInputElement&gt;(null);

// useReducer with typed action
type Action = { type: 'increment' } | { type: 'reset' };
const [count, dispatch] = useReducer((state: number, action: Action) =&gt; {
  switch (action.type) {
    case 'increment': return state + 1;
    case 'reset':     return 0;
  }
}, 0);

// Custom Hook with types
function useFetch&lt;T&gt;(url: string): { data: T | null; loading: boolean } {
  const [data, setData] = useState&lt;T | null&gt;(null);
  // ...
  return { data, loading };
}</code></pre>
              </div>`
          },
          {
            q:   'Explain how to create a simple React Hooks example program.',
            tag: 'easy',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> A simple todo list demonstrates <code>useState</code>, <code>useEffect</code>, and event handling — the most common hooks in practice.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">JSX</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [input, setInput]  = useState('');

  // useEffect — persist to localStorage
  useEffect(() =&gt; {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = () =&gt; {
    if (!input.trim()) return;
    setTodos(prev =&gt; [...prev, { id: Date.now(), text: input }]);
    setInput('');
  };

  const removeTodo = (id) =&gt;
    setTodos(prev =&gt; prev.filter(t =&gt; t.id !== id));

  return (
    &lt;div&gt;
      &lt;input value={input} onChange={e =&gt; setInput(e.target.value)} /&gt;
      &lt;button onClick={addTodo}&gt;Add&lt;/button&gt;
      &lt;ul&gt;
        {todos.map(t =&gt;
          &lt;li key={t.id}&gt;{t.text} &lt;button onClick={() =&gt; removeTodo(t.id)}&gt;✕&lt;/button&gt;&lt;/li&gt;
        )}
      &lt;/ul&gt;
    &lt;/div&gt;
  );
}</code></pre>
              </div>`
          },
          {
            q:   'What is the difference between <code>useState</code> and <code>useReducer</code>?',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong>
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Text</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>Feature            useState                      useReducer
--------------     --------------------------    ---------------------------------
Complexity         Simple values                 Complex state objects / logic
Update style       Setter function               Dispatch action (like Redux)
Logic location     Inline in handlers            Centralised in reducer function
Testing            Harder (logic in component)   Easier (pure reducer function)
When to prefer     Simple flags, strings, nums   Forms, multi-step wizards, carts</code></pre>
              </div>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">JSX</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>// useReducer — cart with add/remove/clear actions
const cartReducer = (state, action) =&gt; {
  switch (action.type) {
    case 'ADD':    return [...state, action.item];
    case 'REMOVE': return state.filter(i =&gt; i.id !== action.id);
    case 'CLEAR':  return [];
    default: return state;
  }
};
const [cart, dispatch] = useReducer(cartReducer, []);
dispatch({ type: 'ADD', item: product });</code></pre>
              </div>`
          },
          {
            q:   'What is <code>useRef</code> and what is it used for?',
            tag: 'easy',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> <code>useRef</code> returns a mutable <code>{ current: value }</code> object that persists across renders. Changing <code>ref.current</code> does NOT trigger a re-render — making it ideal for two use cases:
                <br/><br/>1. <strong>Accessing DOM nodes</strong> — attach via <code>ref</code> attribute on JSX element.
                <br/>2. <strong>Storing mutable values</strong> — previous state, timer IDs, or any value you want to track without causing re-renders.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">JSX</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>// 1. DOM access — auto-focus on mount
function SearchBar() {
  const ref = useRef(null);
  useEffect(() =&gt; ref.current.focus(), []);
  return &lt;input ref={ref} placeholder="Search..." /&gt;;
}

// 2. Track render count without causing re-render
function RenderCount() {
  const renders = useRef(0);
  renders.current++;
  return &lt;p&gt;Renders: {renders.current}&lt;/p&gt;;
}</code></pre>
              </div>`
          },
          {
            q:   'What are React Portals and when would you use them?',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> A <strong>Portal</strong> lets you render a React component's DOM output <strong>outside</strong> its parent DOM hierarchy — into any DOM node you specify — while keeping it in the React component tree (so events bubble up normally through React's tree, not the DOM tree).
                <br/><br/><strong>Use cases:</strong>
                <br/>• <strong>Modals / dialogs</strong> — rendered at document body level to avoid CSS overflow/z-index conflicts with parent containers.
                <br/>• <strong>Tooltips / popovers</strong> — need to escape parent overflow:hidden.
                <br/>• <strong>Toast notifications</strong>.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">JSX</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>function Modal({ children, isOpen }) {
  if (!isOpen) return null;
  return ReactDOM.createPortal(
    &lt;div className="modal-overlay"&gt;{children}&lt;/div&gt;,
    document.getElementById('modal-root')  // outside App's DOM tree
  );
}</code></pre>
              </div>`
          }
        ]
      },
      // ════════════════════════════════════════
      //  DAY 13
      // ════════════════════════════════════════
      {
        id:     'day13',
        day:    13,
        title:  'Advanced React Hooks & Patterns',
        topics: ['useMemo', 'useCallback', 'React.memo', 'useLayoutEffect', 'forwardRef', 'Context API', 'HOC', 'React.Fragment', 'Suspense & Lazy', 'Reconciliation'],
        questions: [
          {
            q:   'What is <code>useMemo</code> and when should you use it?',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> <code>useMemo</code> memoizes the <strong>result</strong> of an expensive calculation — it only recomputes the value when one of its dependencies changes.
                <br/><br/><code>const result = useMemo(() =&gt; expensiveCalc(a, b), [a, b]);</code>
                <br/><br/><strong>When to use:</strong>
                <br/>• Filtering/sorting large data arrays.
                <br/>• Complex derived computations.
                <br/>• Referential stability for objects passed as props to <code>React.memo</code> children.
                <br/><br/><strong>When NOT to use:</strong> Don't wrap every value — memoization has overhead (memory + comparison). Only use when profiling shows a genuine performance problem.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">JSX</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>const filteredUsers = useMemo(
  () =&gt; users.filter(u =&gt; u.name.includes(searchTerm)),
  [users, searchTerm]   // only recompute when users or searchTerm changes
);</code></pre>
              </div>`
          },
          {
            q:   'What is <code>useCallback</code> and when should you use it?',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> <code>useCallback</code> memoizes a <strong>function definition</strong> — it returns the same function reference between renders as long as dependencies haven't changed.
                <br/><br/><code>const fn = useCallback(() =&gt; doSomething(a), [a]);</code>
                <br/><br/><strong>When to use:</strong>
                <br/>• Passing callbacks to child components wrapped in <code>React.memo</code> — without <code>useCallback</code>, a new function reference is created every render, causing the memo'd child to re-render unnecessarily.
                <br/>• Callbacks listed in <code>useEffect</code> dependencies (prevents infinite loops).
                <br/><br/><strong>Analogy:</strong> <code>useMemo</code> = memoize the return <em>value</em>; <code>useCallback</code> = memoize the <em>function itself</em>.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">JSX</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>const handleDelete = useCallback(
  (id) =&gt; dispatch({ type: 'REMOVE', id }),
  [dispatch]   // stable reference — memo'd child won't re-render
);
&lt;MemoizedList onDelete={handleDelete} /&gt;</code></pre>
              </div>`
          },
          {
            q:   'What is <code>React.memo</code>? How is it different from <code>useMemo</code> and <code>useCallback</code>?',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong>
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Text</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>API              What it memoizes         When to use
-----------      ----------------------   -------------------------------------------
React.memo       A COMPONENT              Prevent child re-render when props unchanged
useMemo          A COMPUTED VALUE         Cache expensive calculation results
useCallback      A FUNCTION REFERENCE     Stable callback for memo'd child or effect deps</code></pre>
              </div>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">JSX</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>// React.memo — wraps a component; skips re-render if props are shallowly equal
const ExpensiveChart = React.memo(({ data }) =&gt; {
  return &lt;canvas data={data} /&gt;;
});

// Without React.memo — this child re-renders every time the parent re-renders
// even if "data" hasn't changed</code></pre>
              </div>`
          },
          {
            q:   'What is the difference between <code>useEffect</code> and <code>useLayoutEffect</code>?',
            tag: 'hard',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> Both accept the same arguments, but they fire at different phases of the render cycle.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Text</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>Hook               When it fires                     Blocks paint?
--------------     ------------------------------    --------------
useEffect          AFTER paint (async)               No  ← default, preferred
useLayoutEffect    AFTER DOM mutation, BEFORE paint  Yes ← use only when needed</code></pre>
              </div>
              <p class="accordion-answer" style="margin-top:10px;">
                <strong>When to use <code>useLayoutEffect</code>:</strong> When you need to <strong>read DOM measurements</strong> (dimensions, scroll position) and synchronously re-render before the user sees the intermediate state — otherwise there would be a visible flicker. Examples: tooltips positioned relative to an element, animations.
                <br/><br/><strong>Caution:</strong> <code>useLayoutEffect</code> blocks the browser paint and can hurt performance if the effect is slow. It also throws a warning in SSR.
              </p>`
          },
          {
            q:   'What is <code>forwardRef</code> and when do you need it?',
            tag: 'hard',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> By default, a <code>ref</code> attached to a custom React component does NOT work — React doesn't forward it to the underlying DOM node. <code>React.forwardRef</code> is used to <strong>pass a ref through a component</strong> to a DOM element or another component inside it.
                <br/><br/><strong>Use cases:</strong>
                <br/>• Reusable input/button components where the parent needs to focus or read the DOM node.
                <br/>• Component libraries (Material UI, Radix UI) — all expose ref-forwarded components.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">JSX</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>// ✅ forwardRef — lets parent access internal DOM input
const FancyInput = React.forwardRef((props, ref) =&gt; (
  &lt;input className="fancy" ref={ref} {...props} /&gt;
));

// Parent uses it
const inputRef = useRef(null);
&lt;FancyInput ref={inputRef} /&gt;;
// Now: inputRef.current is the &lt;input&gt; DOM node
inputRef.current.focus();</code></pre>
              </div>`
          },
          {
            q:   'What is the Context API? When should you use it instead of prop drilling?',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> The <strong>Context API</strong> provides a way to share values (data or functions) across the component tree <strong>without passing props at every level</strong>. It consists of:
                <br/>• <code>React.createContext(defaultValue)</code> — creates the context object.
                <br/>• <code>&lt;Context.Provider value={...}&gt;</code> — wraps the subtree; all consumers below receive the value.
                <br/>• <code>useContext(Context)</code> — consumes the value in any descendant.
                <br/><br/><strong>When to use Context:</strong>
                <br/>• Truly <strong>global</strong> data: current user, authentication status, theme, language/locale, feature flags.
                <br/>• When a value is needed by many components at different nesting levels.
                <br/><br/><strong>When NOT to use Context:</strong>
                <br/>• Frequently changing data (every consumer re-renders on every change). Use a state management library for high-frequency updates.
              </p>`
          },
          {
            q:   'What are Higher Order Components (HOCs)?',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> A <strong>Higher Order Component (HOC)</strong> is a <strong>function that takes a component and returns a new enhanced component</strong>. It's a pattern for reusing component logic — wrapping shared behaviour (auth check, logging, data fetching) around any component without modifying it.
                <br/><br/><strong>HOCs are now largely replaced by Custom Hooks</strong> in modern React, but you'll encounter HOCs in older codebases and some libraries (React Redux's <code>connect()</code>, React Router's <code>withRouter()</code>).
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">JSX</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>// HOC — adds authentication guard to any component
function withAuth(WrappedComponent) {
  return function AuthGuard(props) {
    const { isLoggedIn } = useAuth();
    if (!isLoggedIn) return &lt;Navigate to="/login" /&gt;;
    return &lt;WrappedComponent {...props} /&gt;;
  };
}

const ProtectedDashboard = withAuth(Dashboard);</code></pre>
              </div>`
          },
          {
            q:   'What is <code>React.Fragment</code> and why is it useful?',
            tag: 'easy',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> <code>React.Fragment</code> (short syntax: <code>&lt;&gt;&lt;/&gt;</code>) lets you <strong>group multiple JSX elements without adding an extra DOM node</strong>. React requires components to return a single root element — Fragment satisfies this without polluting the DOM with wrapper <code>&lt;div&gt;</code>s.
                <br/><br/><strong>Use <code>&lt;React.Fragment key={...}&gt;</code></strong> when you need to add a <code>key</code> prop (e.g., in a list). The short <code>&lt;&gt;&lt;/&gt;</code> syntax doesn't accept attributes.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">JSX</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>// ❌ Extra div pollutes DOM / breaks flex/grid layouts
return &lt;div&gt;&lt;td&gt;Name&lt;/td&gt;&lt;td&gt;Age&lt;/td&gt;&lt;/div&gt;;

// ✅ Fragment — no extra DOM node
return &lt;&gt;&lt;td&gt;Name&lt;/td&gt;&lt;td&gt;Age&lt;/td&gt;&lt;/&gt;;

// Fragment with key (in list)
return rows.map(row =&gt;
  &lt;React.Fragment key={row.id}&gt;
    &lt;dt&gt;{row.label}&lt;/dt&gt;&lt;dd&gt;{row.value}&lt;/dd&gt;
  &lt;/React.Fragment&gt;
);</code></pre>
              </div>`
          },
          {
            q:   'What are React Suspense and <code>React.lazy</code>? How do they enable code splitting?',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong>
                <br/>• <code>React.lazy()</code> — lazily load a component's module (it's imported only when the component is first rendered). The import is a dynamic <code>import()</code> that Webpack/Vite splits into a separate code chunk.
                <br/>• <code>&lt;Suspense fallback={...}&gt;</code> — wraps lazy components; shows the fallback (e.g., a spinner) while the lazy component's code is being downloaded.
                <br/><br/><strong>Benefit (Code Splitting):</strong> Instead of sending all JS in one large bundle, the app sends only what's needed for the initial page. Other components load on-demand, reducing initial load time.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">JSX</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>// Lazy load — Dashboard.js is NOT included in the initial bundle
const Dashboard = React.lazy(() =&gt; import('./Dashboard'));

function App() {
  return (
    &lt;Suspense fallback={&lt;div&gt;Loading...&lt;/div&gt;}&gt;
      &lt;Dashboard /&gt;
    &lt;/Suspense&gt;
  );
}
// When &lt;Dashboard&gt; first renders, the browser fetches Dashboard.js separately</code></pre>
              </div>`
          },
          {
            q:   'What is reconciliation? How does React\'s diffing algorithm work?',
            tag: 'hard',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> <strong>Reconciliation</strong> is the process React uses to compute the minimum DOM operations needed when state/props change. React creates a new Virtual DOM tree and <strong>diffs</strong> it against the previous one.
                <br/><br/><strong>Diffing heuristics (O(n) instead of O(n³)):</strong>
                <br/>1. <strong>Different element types</strong> — if the root element type changes (e.g., <code>&lt;div&gt;</code> → <code>&lt;span&gt;</code>), tear down the entire subtree and rebuild it.
                <br/>2. <strong>Same element type</strong> — keep the DOM node; update only changed attributes/styles.
                <br/>3. <strong>Lists use keys</strong> — React uses the <code>key</code> prop to match new and old list items. Stable keys → minimal updates. Missing/index keys → incorrect updates on reorder.
                <br/><br/><strong>React Fiber</strong> (React 16+) — a rewrite of the reconciler that breaks rendering work into small units that can be interrupted, paused, and prioritized, enabling Concurrent Mode features.
              </p>`
          },
          {
            q:   'How to create a switching component for displaying different pages?',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> A switching component conditionally renders one of several components based on a value — useful for tab panels, step wizards, or simple routing without a router library.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">JSX</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>const PAGES = {
  home:    &lt;HomePage /&gt;,
  about:   &lt;AboutPage /&gt;,
  contact: &lt;ContactPage /&gt;,
};

function PageSwitcher({ page }) {
  return PAGES[page] ?? &lt;NotFound /&gt;;
}

// Usage — switch page on button click
function App() {
  const [page, setPage] = useState('home');
  return (
    &lt;&gt;
      &lt;nav&gt;
        &lt;button onClick={() =&gt; setPage('home')}&gt;Home&lt;/button&gt;
        &lt;button onClick={() =&gt; setPage('about')}&gt;About&lt;/button&gt;
      &lt;/nav&gt;
      &lt;PageSwitcher page={page} /&gt;
    &lt;/&gt;
  );
}</code></pre>
              </div>`
          },
          {
            q:   'How to re-render the view when the browser is resized?',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> Listen to the <code>window resize</code> event inside a <code>useEffect</code> and store the dimensions in state. Always remove the listener on cleanup to prevent memory leaks. Extract it into a reusable custom hook.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">JSX</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>function useWindowSize() {
  const [size, setSize] = useState({
    width:  window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() =&gt; {
    const handleResize = () =&gt;
      setSize({ width: window.innerWidth, height: window.innerHeight });

    window.addEventListener('resize', handleResize);
    return () =&gt; window.removeEventListener('resize', handleResize); // cleanup!
  }, []);  // [] — attach listener once

  return size;
}

// Usage
const { width, height } = useWindowSize();
return &lt;p&gt;{width} x {height}&lt;/p&gt;;</code></pre>
              </div>`
          },
          {
            q:   'How to pass data between sibling components in React?',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> React has unidirectional data flow — siblings can't communicate directly. The pattern is to <strong>lift the state up</strong> to the nearest common parent, which then passes data down as props.
                <br/><br/><strong>Pattern — Lift State Up:</strong>
                <br/>1. Move shared state to the common parent.
                <br/>2. Pass the state value down to the reading sibling as a prop.
                <br/>3. Pass a setter function down to the writing sibling as a callback prop.
                <br/><br/><strong>For distant siblings</strong>, use Context API, a state management library, or React Router's location state.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">JSX</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>function Parent() {
  const [msg, setMsg] = useState('');
  return (
    &lt;&gt;
      &lt;SenderSibling onSend={setMsg} /&gt;    {/* writes */}
      &lt;ReceiverSibling message={msg} /&gt;    {/* reads */}
    &lt;/&gt;
  );
}</code></pre>
              </div>`
          },
          {
            q:   'Explain conditional rendering in React.',
            tag: 'easy',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> React doesn't have a template directive like <code>v-if</code>. Instead, conditional rendering uses regular JavaScript expressions inside JSX. Three common patterns:
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">JSX</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>// 1. if/else (outside return)
if (loading) return &lt;Spinner /&gt;;

// 2. Ternary operator (inline)
return isLoggedIn ? &lt;Dashboard /&gt; : &lt;Login /&gt;;

// 3. Short-circuit evaluation (render or nothing)
return (
  &lt;div&gt;
    {error &amp;&amp; &lt;ErrorBanner message={error} /&gt;}
    {data &amp;&amp; &lt;DataTable rows={data} /&gt;}
  &lt;/div&gt;
);

// 4. IIFE or extracted function for complex logic
{(() =&gt; {
  if (status === 'loading') return &lt;Spinner /&gt;;
  if (status === 'error')   return &lt;Error /&gt;;
  return &lt;DataTable /&gt;;
})()}</code></pre>
              </div>`
          },
          {
            q:   'How to perform automatic redirect after login?',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> After a successful login API call, use React Router's <code>useNavigate</code> hook to programmatically redirect to the intended page. Save the original URL before redirecting to login so you can send the user back there after authentication.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">JSX</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>// Protected route — save intended URL in location state
function PrivateRoute({ children }) {
  const { isLoggedIn } = useAuth();
  const location = useLocation();
  if (!isLoggedIn)
    return &lt;Navigate to="/login" state={{ from: location }} replace /&gt;;
  return children;
}

// Login component — redirect back after success
function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname ?? '/dashboard';

  async function handleSubmit(creds) {
    await loginAPI(creds);
    navigate(from, { replace: true });  // redirect to original destination
  }
}</code></pre>
              </div>`
          }
        ]
      },
      // ════════════════════════════════════════
      //  DAY 14
      // ════════════════════════════════════════
      {
        id:     'day14',
        day:    14,
        title:  'React Lifecycle, Performance & State Management',
        topics: ['Component Lifecycle', 'Lifecycle Methods', 'SSR vs CSR', 'Strict Mode', 'Prevent Re-renders', 'Performance Optimisation', 'Global State', 'Styling', 'React Router'],
        questions: [
          {
            q:   'What are the different phases of the React component lifecycle?',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> Every React component goes through three main lifecycle phases:
                <br/><br/>• <strong>Mounting</strong> — component is created and inserted into the DOM for the first time.
                <br/>• <strong>Updating</strong> — component re-renders due to changes in props or state.
                <br/>• <strong>Unmounting</strong> — component is removed from the DOM.
                <br/><br/><strong>In functional components with Hooks:</strong>
                <br/>• <code>useEffect(() =&gt; {...}, [])</code> → Mounting
                <br/>• <code>useEffect(() =&gt; {...}, [dep])</code> → Updating when dep changes
                <br/>• <code>useEffect(() =&gt; { return cleanup; }, [])</code> → Unmounting
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Text</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>MOUNT                    UPDATE                    UNMOUNT
-------------------      --------------------      --------------------
constructor()            getDerivedStateFromProps  componentWillUnmount
getDerivedStateFromProps shouldComponentUpdate
render()                 render()
componentDidMount        componentDidUpdate
                         getSnapshotBeforeUpdate</code></pre>
              </div>`
          },
          {
            q:   'What are the lifecycle methods of React (class components)?',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong>
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Text</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>Method                          Phase      Purpose
-----------------------------   --------   ------------------------------------------
constructor(props)              Mount      Initialise state, bind methods
static getDerivedStateFromProps Mount/Upd  Derive state from props (rare)
render()                        Both       Return JSX — must be pure
componentDidMount()             Mount      API calls, subscriptions, DOM setup
shouldComponentUpdate()         Update     Return false to skip re-render (optimisation)
getSnapshotBeforeUpdate()       Update     Capture scroll position before DOM update
componentDidUpdate(prev, snap)  Update     React to prop/state changes, API calls
componentWillUnmount()          Unmount    Clean up subscriptions, timers
getDerivedStateFromError()      Error      Show error UI after child error
componentDidCatch()             Error      Log the error</code></pre>
              </div>`
          },
          {
            q:   'What is server-side rendering (SSR)? How does it differ from client-side rendering?',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong>
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Text</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>Feature              CSR (Create React App)       SSR (Next.js)
-----------------    ---------------------------  ----------------------------
Initial HTML         Empty &lt;div id="root"&gt;        Fully rendered HTML
First paint          Slow (wait for JS bundle)    Fast (HTML already there)
SEO                  Poor (crawlers see empty)    Excellent (content in HTML)
TTI (interactive)    Slower                       Depends (hydration needed)
Server load          Low (static files)           Higher (render per request)
Use case             Dashboards, admin tools      Marketing, e-commerce, blogs
Frameworks           Vite, CRA                    Next.js, Remix, Gatsby</code></pre>
              </div>
              <p class="accordion-answer" style="margin-top:10px;"><strong>Hydration:</strong> After SSR sends HTML, React attaches event listeners to the existing DOM (without re-creating it) — this process is called hydration.</p>`
          },
          {
            q:   'Explain Strict Mode in React.',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> <code>&lt;React.StrictMode&gt;</code> is a development-only tool that activates additional checks and warnings — it has <strong>no effect in production</strong>.
                <br/><br/><strong>What it detects:</strong>
                <br/>• <strong>Unsafe lifecycle methods</strong> (<code>componentWillMount</code>, etc.).
                <br/>• <strong>Legacy string ref usage</strong>.
                <br/>• <strong>Unexpected side effects</strong> — in React 18, StrictMode double-invokes render functions and effects to expose non-idempotent side effects.
                <br/>• Deprecated <code>findDOMNode</code> usage.
                <br/>• Detects accidental use of deprecated APIs.
                <br/><br/>The double-invoke behaviour is why you might see your effects run twice in development — this is intentional. In production, effects run once as expected.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">JSX</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>root.render(
  &lt;React.StrictMode&gt;
    &lt;App /&gt;
  &lt;/React.StrictMode&gt;
);</code></pre>
              </div>`
          },
          {
            q:   'What are common React performance optimization techniques?',
            tag: 'hard',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong>
                <br/>1. <strong>React.memo</strong> — prevent functional component re-renders when props are unchanged.
                <br/>2. <strong>useCallback</strong> — stable function references for memo'd children.
                <br/>3. <strong>useMemo</strong> — cache expensive computed values.
                <br/>4. <strong>Code splitting (React.lazy + Suspense)</strong> — reduce initial bundle size.
                <br/>5. <strong>Virtualisation (react-window, react-virtual)</strong> — render only visible rows of large lists.
                <br/>6. <strong>Avoid anonymous functions in JSX</strong> — creates new references every render.
                <br/>7. <strong>Avoid deeply nested state updates</strong> — use shallow structures or Immer.
                <br/>8. <strong>Debounce/throttle event handlers</strong> — reduce frequency of expensive updates (search input, resize).
                <br/>9. <strong>Image optimisation</strong> — lazy load images, use next/image for auto-sizing.
                <br/>10. <strong>Production build</strong> — <code>npm run build</code> enables minification and removes dev warnings.
                <br/><br/><strong>Measure first:</strong> Use React DevTools Profiler to identify actual bottlenecks before optimizing.
              </p>`
          },
          {
            q:   'How to prevent re-renders in React?',
            tag: 'hard',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> React re-renders a component when its state or props change. Unnecessary re-renders happen when a parent re-renders and passes new object/function references even if the data is the same. Prevention strategies:
                <br/><br/>• <strong>React.memo</strong> — memoize the component; skip re-render if props are shallowly equal.
                <br/>• <strong>useCallback</strong> — stabilise callback props passed to memo'd children.
                <br/>• <strong>useMemo</strong> — stabilise object/array props.
                <br/>• <strong>State colocation</strong> — keep state as close as possible to where it's used. Don't lift state higher than necessary.
                <br/>• <strong>Context splitting</strong> — separate frequently-changing context from rarely-changing context.
                <br/>• <strong>shouldComponentUpdate / PureComponent</strong> — for class components.
                <br/>• <strong>useReducer instead of useState</strong> — dispatching the same action doesn't cause a re-render if the reducer returns the same state.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">JSX</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>// ❌ New object reference every render — memo'd child still re-renders
&lt;MemoChild config={{ size: 'large' }} /&gt;

// ✅ Stable reference with useMemo
const config = useMemo(() =&gt; ({ size: 'large' }), []);
&lt;MemoChild config={config} /&gt;</code></pre>
              </div>`
          },
          {
            q:   'How do you manage global state? Compare Context, Redux, and modern alternatives.',
            tag: 'hard',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong>
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Text</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>Library          Bundle   Re-render       DevTools  Best for
-----------      ------   ------------    --------  ---------------------------------
Context API      0 KB     All consumers   Basic     Simple themes, auth (low-freq updates)
Redux Toolkit    ~10 KB   Selector-based  Excellent Large apps, complex async, time-travel
Zustand          ~1 KB    Selector-based  Good      Medium apps, simple API, performance
Jotai            ~3 KB    Atom-based      Good      Atomic state, minimal boilerplate
Recoil           ~15 KB   Atom-based      Good      Meta ecosystem, derived state</code></pre>
              </div>
              <p class="accordion-answer" style="margin-top:10px;"><strong>Rule of thumb:</strong> Use Context for low-frequency global values (theme, current user). Use Zustand or Redux Toolkit for application state that changes often or has complex update logic.</p>`
          },
          {
            q:   'What are the different ways to style a React component?',
            tag: 'easy',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong>
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Text</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>Method                  Example                          Pros / Cons
-------------------     -----------------------------    ----------------------------
CSS stylesheets         import './App.css'               Simple; global scope (name clashes)
CSS Modules             styles.button                    Scoped; compile-time; no runtime cost
Inline styles           style={{ color: 'red' }}         Dynamic; no CSS features (no :hover)
CSS-in-JS (styled)      styled.button\`color: red;\`      Scoped, theming; runtime cost
Tailwind CSS            className="bg-blue-500 p-4"      Utility-first; fast; verbose HTML
Sass/SCSS               import './App.scss'              CSS superset; nesting; variables</code></pre>
              </div>`
          },
          {
            q:   'How to pass data between React components?',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> Five common approaches:
                <br/><br/>1. <strong>Props (parent → child)</strong> — the standard way. Pass values as JSX attributes.
                <br/>2. <strong>Callback props (child → parent)</strong> — parent passes a function; child calls it with data.
                <br/>3. <strong>Lift state up (sibling → sibling)</strong> — share state in the nearest common parent.
                <br/>4. <strong>Context API</strong> — broadcast data to any descendant without explicit prop passing.
                <br/>5. <strong>State management library</strong> (Redux, Zustand) — global store accessible from anywhere.
                <br/>6. <strong>React Router state</strong> — <code>navigate('/page', { state: { data } })</code>; read with <code>useLocation()</code>.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">JSX</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>// Child → Parent via callback
function Child({ onSelect }) {
  return &lt;button onClick={() =&gt; onSelect('hello')}&gt;Send&lt;/button&gt;;
}
function Parent() {
  const [msg, setMsg] = useState('');
  return &lt;Child onSelect={setMsg} /&gt;;
}</code></pre>
              </div>`
          },
          {
            q:   'What is React Router?',
            tag: 'easy',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> <strong>React Router</strong> is the most popular routing library for React applications. It provides <strong>client-side routing</strong> — navigating between pages by updating the URL and rendering the matched component, without a full server round-trip.
                <br/><br/><strong>Core components / hooks in React Router v6:</strong>
                <br/>• <code>&lt;BrowserRouter&gt;</code> — wraps the app; uses the browser's History API.
                <br/>• <code>&lt;Routes&gt;</code> / <code>&lt;Route path="/..." element={&lt;Component /&gt;}&gt;</code> — define URL-to-component mapping.
                <br/>• <code>&lt;Link to="/path"&gt;</code> — navigation without page reload.
                <br/>• <code>useNavigate()</code> — programmatic navigation.
                <br/>• <code>useParams()</code> — read URL parameters.
                <br/>• <code>useLocation()</code> — current URL/state.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">JSX</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>&lt;BrowserRouter&gt;
  &lt;Routes&gt;
    &lt;Route path="/"           element={&lt;Home /&gt;} /&gt;
    &lt;Route path="/users/:id"  element={&lt;UserDetail /&gt;} /&gt;
    &lt;Route path="*"           element={&lt;NotFound /&gt;} /&gt;
  &lt;/Routes&gt;
&lt;/BrowserRouter&gt;</code></pre>
              </div>`
          },
          {
            q:   'How does client-side routing differ from traditional server-side routing?',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong>
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Text</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>Aspect               Server-side Routing              Client-side Routing (React Router)
-----------------    -----------------------------    ----------------------------------
Navigation           Full page reload from server     JavaScript updates URL + renders component
Speed                Slower (network round-trip)      Instant (no server request)
HTML per page        Separate HTML per route          Single HTML file (SPA)
SEO                  Naturally good                   Needs SSR/prerendering
Deep links           Work by default                  Need server config (404 fallback → index.html)
State persistence    Lost on navigation               Preserved (JS stays loaded)</code></pre>
              </div>`
          },
          {
            q:   'What is the difference between <code>BrowserRouter</code> and <code>HashRouter</code>?',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong>
                <br/>• <strong>BrowserRouter</strong> — uses the HTML5 History API (<code>pushState</code>). URLs look clean: <code>example.com/users/42</code>. Requires server configuration to serve <code>index.html</code> for all routes (otherwise a direct URL returns 404).
                <br/>• <strong>HashRouter</strong> — stores the route in the URL hash: <code>example.com/#/users/42</code>. Works without server configuration because the server ignores the hash; the browser never sends it. Useful for static hosts (GitHub Pages, S3 static site) that don't support server rewrites.
                <br/><br/><strong>Prefer BrowserRouter</strong> for production apps with proper server/CDN configuration.
              </p>`
          },
          {
            q:   'How do you implement protected/private routes in React Router?',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> Wrap protected pages in a component that checks authentication. If the user is not authenticated, redirect to the login page (saving the intended URL so they can return after login).
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">JSX</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>function RequireAuth({ children }) {
  const { user } = useAuth();
  const location = useLocation();
  if (!user)
    return &lt;Navigate to="/login" state={{ from: location }} replace /&gt;;
  return children;
}

// Route definitions
&lt;Routes&gt;
  &lt;Route path="/login"   element={&lt;Login /&gt;} /&gt;
  &lt;Route path="/dashboard" element={
    &lt;RequireAuth&gt;&lt;Dashboard /&gt;&lt;/RequireAuth&gt;
  } /&gt;
&lt;/Routes&gt;</code></pre>
              </div>`
          },
          {
            q:   'What is the React Profiler and how do you use it?',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> The <strong>React Profiler</strong> is a tab in React DevTools that records performance information about each component render — showing which components rendered, how long they took, and why they rendered.
                <br/><br/><strong>How to use:</strong>
                <br/>1. Open React DevTools in Chrome/Firefox.
                <br/>2. Click the <strong>Profiler</strong> tab → press Record.
                <br/>3. Interact with the app.
                <br/>4. Stop recording → inspect the flame chart.
                <br/><br/><strong>What to look for:</strong> Components with long render times (grey bars); components that render more often than expected; components that re-render when their props haven't changed (candidate for <code>React.memo</code>).
                <br/><br/>You can also use the <code>&lt;Profiler&gt;</code> API programmatically to log timings in production.
              </p>`
          },
          {
            q:   'What are the different phases of the React component lifecycle in functional components (Hooks equivalent)?',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> How the class lifecycle methods map to Hook equivalents:
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Text</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>Class Method                    Hook Equivalent
-----------------------------   -----------------------------------------------
constructor                     useState / useReducer initialisation
componentDidMount               useEffect(() =&gt; {...}, [])
componentDidUpdate              useEffect(() =&gt; {...}, [deps])
componentWillUnmount            useEffect(() =&gt; { return cleanup; }, [])
shouldComponentUpdate           React.memo / useMemo
getDerivedStateFromError        ❌ No hook (class ErrorBoundary required)
componentDidCatch               ❌ No hook (class ErrorBoundary required)
getSnapshotBeforeUpdate         ❌ No hook equivalent</code></pre>
              </div>`
          }
        ]
      },
      // ════════════════════════════════════════
      //  DAY 15
      // ════════════════════════════════════════
      {
        id:     'day15',
        day:    15,
        title:  'React Router & Data Fetching',
        topics: ['React Router v6', 'useNavigate', 'useParams', 'useSearchParams', 'Nested Routes', 'Protected Routes', 'Data Fetching Patterns', 'React Query', 'Lazy Routes'],
        questions: [
          {
            q:   'What is <code>useNavigate</code> and how does it differ from the old <code>useHistory</code>?',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> In React Router v6, <code>useHistory</code> was replaced by <code>useNavigate</code>.
                <br/><br/><code>useNavigate()</code> returns a <code>navigate</code> function:
                <br/>• <code>navigate('/path')</code> — push a new entry onto history.
                <br/>• <code>navigate('/path', { replace: true })</code> — replace current history entry (no back button).
                <br/>• <code>navigate(-1)</code> — go back (like browser back button).
                <br/>• <code>navigate('/path', { state: { data } })</code> — pass state to the destination route.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">JSX</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>function LogoutButton() {
  const navigate = useNavigate();

  const handleLogout = () =&gt; {
    clearSession();
    navigate('/login', { replace: true });  // user can't go back to dashboard
  };

  return &lt;button onClick={handleLogout}&gt;Logout&lt;/button&gt;;
}</code></pre>
              </div>`
          },
          {
            q:   'How do you read URL parameters with <code>useParams</code>?',
            tag: 'easy',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> <code>useParams()</code> returns an object of key-value pairs for the <strong>dynamic segments</strong> in the route path. The keys match the <code>:param</code> names defined in the <code>&lt;Route path&gt;</code>.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">JSX</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>// Route definition
&lt;Route path="/users/:userId/posts/:postId" element={&lt;PostDetail /&gt;} /&gt;

// Component
function PostDetail() {
  const { userId, postId } = useParams();
  // URL: /users/42/posts/7 → userId="42", postId="7"

  return &lt;h1&gt;Post {postId} by User {userId}&lt;/h1&gt;;
}</code></pre>
              </div>`
          },
          {
            q:   'What is <code>useSearchParams</code> and how do you use query strings?',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> <code>useSearchParams</code> provides read/write access to the URL's query string (<code>?key=value</code>) — analogous to <code>useState</code> but persisted in the URL.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">JSX</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>function ProductList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get('category') ?? 'all';
  const page      = Number(searchParams.get('page') ?? 1);

  const handleCategoryChange = (cat) =&gt;
    setSearchParams({ category: cat, page: 1 });

  // URL: /products?category=shoes&page=2
  return (
    &lt;div&gt;
      &lt;select value={category} onChange={e =&gt; handleCategoryChange(e.target.value)}&gt;
        &lt;option value="all"&gt;All&lt;/option&gt;
        &lt;option value="shoes"&gt;Shoes&lt;/option&gt;
      &lt;/select&gt;
      &lt;ProductGrid category={category} page={page} /&gt;
    &lt;/div&gt;
  );
}</code></pre>
              </div>`
          },
          {
            q:   'How do you implement nested routes and layouts with <code>&lt;Outlet&gt;</code>?',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> <code>&lt;Outlet /&gt;</code> is a placeholder in a parent route's component that renders the matching child route. This enables <strong>shared layouts</strong> — navigation, sidebars, or headers that wrap multiple child pages.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">JSX</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>// Route configuration — DashboardLayout wraps all /dashboard/* routes
&lt;Routes&gt;
  &lt;Route path="/dashboard" element={&lt;DashboardLayout /&gt;}&gt;
    &lt;Route index         element={&lt;Overview /&gt;} /&gt;       {/* /dashboard */}
    &lt;Route path="users"  element={&lt;UserList /&gt;} /&gt;       {/* /dashboard/users */}
    &lt;Route path="stats"  element={&lt;Statistics /&gt;} /&gt;     {/* /dashboard/stats */}
  &lt;/Route&gt;
&lt;/Routes&gt;

// DashboardLayout — renders sidebar + active child route
function DashboardLayout() {
  return (
    &lt;div className="layout"&gt;
      &lt;Sidebar /&gt;
      &lt;main&gt;
        &lt;Outlet /&gt;   {/* child route renders here */}
      &lt;/main&gt;
    &lt;/div&gt;
  );
}</code></pre>
              </div>`
          },
          {
            q:   'How do you pass state between routes in React Router?',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> React Router v6 allows you to pass location state via <code>navigate()</code> or <code>&lt;Link state={...}&gt;</code>. The receiving component reads it with <code>useLocation().state</code>.
                <br/><br/><strong>Note:</strong> Location state is not persisted across page refreshes (it lives in browser history memory). For persistent data, use URL query params or a state manager.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">JSX</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>// Sender — navigate with state
navigate('/order-confirmation', { state: { orderId: 123, total: 250.00 } });

// Or via Link
&lt;Link to="/order-confirmation" state={{ orderId: 123 }}&gt;Confirm&lt;/Link&gt;

// Receiver — read state
function OrderConfirmation() {
  const { state } = useLocation();
  const { orderId, total } = state ?? {};
  return &lt;h1&gt;Order #{orderId} confirmed! Total: \${total}&lt;/h1&gt;;
}</code></pre>
              </div>`
          },
          {
            q:   'What is the difference between <code>&lt;Link&gt;</code> and <code>&lt;NavLink&gt;</code>?',
            tag: 'easy',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong>
                <br/>• <code>&lt;Link to="/path"&gt;</code> — renders an anchor tag with client-side navigation. No special styling.
                <br/>• <code>&lt;NavLink to="/path"&gt;</code> — same as <code>Link</code> but automatically adds an <code>active</code> CSS class (or custom class/style via the <code>className</code>/<code>style</code> props with function signature) when the URL matches. Perfect for navigation menus.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">JSX</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>&lt;nav&gt;
  &lt;NavLink
    to="/dashboard"
    className={({ isActive }) =&gt; isActive ? 'nav-link active' : 'nav-link'}
  &gt;
    Dashboard
  &lt;/NavLink&gt;
  &lt;NavLink to="/settings" style={({ isActive }) =&gt; ({ fontWeight: isActive ? 'bold' : 'normal' })}&gt;
    Settings
  &lt;/NavLink&gt;
&lt;/nav&gt;</code></pre>
              </div>`
          },
          {
            q:   'How do you handle 404 routes in React Router v6?',
            tag: 'easy',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> Add a wildcard route (<code>path="*"</code>) as the last route in your <code>&lt;Routes&gt;</code> block. React Router matches routes top-to-bottom; if nothing else matches, the wildcard catches it.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">JSX</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>&lt;Routes&gt;
  &lt;Route path="/"         element={&lt;Home /&gt;} /&gt;
  &lt;Route path="/about"    element={&lt;About /&gt;} /&gt;
  &lt;Route path="/users/:id" element={&lt;UserDetail /&gt;} /&gt;
  &lt;Route path="*"          element={&lt;NotFoundPage /&gt;} /&gt;  {/* catch-all */}
&lt;/Routes&gt;</code></pre>
              </div>`
          },
          {
            q:   'How do you implement lazy-loaded routes with React Router and Suspense?',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> Combine <code>React.lazy()</code> with route definitions. Wrap the routes in <code>&lt;Suspense&gt;</code> at the router level to show a global loading fallback while route chunks are downloading.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">JSX</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>const Dashboard  = React.lazy(() =&gt; import('./pages/Dashboard'));
const Analytics  = React.lazy(() =&gt; import('./pages/Analytics'));
const UserProfile = React.lazy(() =&gt; import('./pages/UserProfile'));

function App() {
  return (
    &lt;Suspense fallback={&lt;PageLoader /&gt;}&gt;
      &lt;Routes&gt;
        &lt;Route path="/"          element={&lt;Home /&gt;} /&gt;        {/* eager */}
        &lt;Route path="/dashboard" element={&lt;Dashboard /&gt;} /&gt;   {/* lazy */}
        &lt;Route path="/analytics" element={&lt;Analytics /&gt;} /&gt;   {/* lazy */}
      &lt;/Routes&gt;
    &lt;/Suspense&gt;
  );
}</code></pre>
              </div>`
          },
          {
            q:   'What is the problem with data fetching inside <code>useEffect</code>?',
            tag: 'hard',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> The naive <code>useEffect</code> + <code>fetch</code> + <code>useState</code> pattern has several well-known problems:
                <br/><br/>1. <strong>Race condition</strong> — if the user changes a filter quickly, multiple requests can be in flight; a slower earlier response might arrive after a faster later one, showing stale data.
                <br/>2. <strong>No deduplication</strong> — multiple components fetching the same URL make separate network requests.
                <br/>3. <strong>No caching</strong> — navigating back to a page refetches from scratch.
                <br/>4. <strong>No loading/error state management out of the box</strong> — you write boilerplate for every fetch.
                <br/>5. <strong>Memory leak</strong> — if the component unmounts before the fetch completes, calling <code>setState</code> on an unmounted component causes a warning (need AbortController).
                <br/><br/>These problems are solved by data-fetching libraries like React Query or SWR.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">JSX</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>// Fix race condition with AbortController
useEffect(() =&gt; {
  const controller = new AbortController();

  fetch(\`/api/users/\${userId}\`, { signal: controller.signal })
    .then(r =&gt; r.json())
    .then(setUser)
    .catch(err =&gt; { if (err.name !== 'AbortError') setError(err); });

  return () =&gt; controller.abort();   // cancel on cleanup
}, [userId]);</code></pre>
              </div>`
          },
          {
            q:   'What is React Query (TanStack Query) and why use it?',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> <strong>TanStack Query (React Query)</strong> is a data-fetching and server-state management library that handles all the hard parts of data fetching automatically:
                <br/>• <strong>Caching</strong> — responses are cached; same key → no refetch.
                <br/>• <strong>Background refetching</strong> — stale data shown immediately while fresh data loads.
                <br/>• <strong>Deduplication</strong> — multiple components with same query → single network request.
                <br/>• <strong>Loading/error/success states</strong> — built-in, no boilerplate.
                <br/>• <strong>Pagination and infinite queries</strong> — first-class support.
                <br/>• <strong>Mutations</strong> — POST/PUT/DELETE with cache invalidation.
                <br/>• <strong>DevTools</strong> — visual cache inspector.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">JSX</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

function UserProfile({ userId }) {
  const { data, isLoading, error } = useQuery({
    queryKey: ['user', userId],          // cache key
    queryFn: () =&gt; fetchUser(userId),    // async fetcher
    staleTime: 5 * 60 * 1000,            // 5 mins before refetch
  });

  if (isLoading) return &lt;Spinner /&gt;;
  if (error)     return &lt;Error /&gt;;
  return &lt;div&gt;{data.name}&lt;/div&gt;;
}</code></pre>
              </div>`
          },
          {
            q:   'What is <code>useLocation</code> and when do you use it?',
            tag: 'easy',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> <code>useLocation()</code> returns the current location object, which contains:
                <br/>• <code>pathname</code> — the URL path: <code>/users/42</code>.
                <br/>• <code>search</code> — the query string: <code>?page=2</code>.
                <br/>• <code>hash</code> — the hash fragment: <code>#section-3</code>.
                <br/>• <code>state</code> — the location state passed via <code>navigate()</code> or <code>&lt;Link state&gt;</code>.
                <br/><br/><strong>Common uses:</strong> reading state passed from previous route, tracking page views (analytics), conditional rendering based on current path.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">JSX</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>function AnalyticsTracker() {
  const location = useLocation();
  useEffect(() =&gt; {
    analytics.pageView(location.pathname + location.search);
  }, [location]);   // fires on every route change
  return null;
}</code></pre>
              </div>`
          },
          {
            q:   'How do you implement index routes in React Router v6?',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> An <strong>index route</strong> (<code>&lt;Route index /&gt;</code>) renders when the parent route's path matches exactly — it's the "default child" for a layout route. It renders at the parent's URL without any additional path segment.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">JSX</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>&lt;Routes&gt;
  &lt;Route path="/dashboard" element={&lt;DashboardLayout /&gt;}&gt;
    &lt;Route index element={&lt;DashboardHome /&gt;} /&gt;   {/* matches /dashboard exactly */}
    &lt;Route path="users"  element={&lt;Users /&gt;} /&gt;    {/* matches /dashboard/users */}
    &lt;Route path="orders" element={&lt;Orders /&gt;} /&gt;   {/* matches /dashboard/orders */}
  &lt;/Route&gt;
&lt;/Routes&gt;</code></pre>
              </div>`
          },
          {
            q:   'What is SWR and how does it compare to React Query?',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> <strong>SWR</strong> (Stale-While-Revalidate) is Vercel's lightweight data-fetching library for React. Both SWR and React Query solve the same core problems (caching, deduplication, background refresh).
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Text</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>Feature                  SWR              React Query
--------------------     -----------      -------------------
Bundle size              ~4 KB            ~12 KB
API simplicity           Simpler          More features
Mutations                Basic            Powerful (optimistic UI, invalidation)
Pagination               Basic            useInfiniteQuery
DevTools                 3rd party        Built-in
Ecosystem                Vercel/Next.js   Framework agnostic
Best for                 Simple fetching  Complex data ops</code></pre>
              </div>`
          },
          {
            q:   'How do you handle loading, error, and success states elegantly in React?',
            tag: 'easy',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> Use a status enum instead of multiple boolean flags — avoids impossible states like <code>loading=true AND error=true</code>.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">JSX</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>// ❌ Multiple booleans — can be inconsistent
const [loading, setLoading] = useState(false);
const [error, setError]     = useState(null);
const [data, setData]       = useState(null);

// ✅ Status enum — mutually exclusive states
const [status, setStatus] = useState('idle');  // 'idle'|'loading'|'success'|'error'

if (status === 'loading') return &lt;Spinner /&gt;;
if (status === 'error')   return &lt;ErrorMessage /&gt;;
if (status === 'success') return &lt;DataView data={data} /&gt;;
return &lt;button onClick={fetchData}&gt;Load&lt;/button&gt;;  // idle</code></pre>
              </div>`
          },
          {
            q:   'How do you debounce an input in React to avoid too many API calls?',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> Use a combination of <code>useState</code> + <code>useEffect</code> + <code>setTimeout</code> to create a debounced value. After the user stops typing for a set delay, trigger the API call.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">JSX</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>function useDebounce(value, delay = 500) {
  const [debounced, setDebounced] = useState(value);

  useEffect(() =&gt; {
    const timer = setTimeout(() =&gt; setDebounced(value), delay);
    return () =&gt; clearTimeout(timer);   // cancel on rapid typing
  }, [value, delay]);

  return debounced;
}

function SearchInput() {
  const [query, setQuery]   = useState('');
  const debouncedQuery      = useDebounce(query, 400);

  // Only fires 400ms after user stops typing
  useEffect(() =&gt; {
    if (debouncedQuery) searchAPI(debouncedQuery);
  }, [debouncedQuery]);

  return &lt;input value={query} onChange={e =&gt; setQuery(e.target.value)} /&gt;;
}</code></pre>
              </div>`
          }
        ]
      },
      // ════════════════════════════════════════
      //  DAY 16
      // ════════════════════════════════════════
      {
        id:     'day16',
        day:    16,
        title:  'React Forms, TypeScript & Testing',
        topics: ['Form Handling', 'Validation', 'React Hook Form', 'TypeScript + React', 'React Testing Library', 'Custom Hook Testing', 'Snapshot Testing'],
        questions: [
          {
            q:   'How do you handle form submission in React?',
            tag: 'easy',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> Use a controlled form: every input value is in React state, and a submit handler reads the state values. Prevent default browser form submission with <code>e.preventDefault()</code>.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">JSX</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>function RegisterForm() {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [errors, setErrors] = useState({});

  const handleChange = ({ target: { name, value } }) =&gt;
    setForm(prev =&gt; ({ ...prev, [name]: value }));

  const handleSubmit = async (e) =&gt; {
    e.preventDefault();
    if (validate(form)) {
      await registerAPI(form);
    }
  };

  return (
    &lt;form onSubmit={handleSubmit}&gt;
      &lt;input name="name"  value={form.name}  onChange={handleChange} /&gt;
      &lt;input name="email" value={form.email} onChange={handleChange} /&gt;
      &lt;button type="submit"&gt;Register&lt;/button&gt;
    &lt;/form&gt;
  );
}</code></pre>
              </div>`
          },
          {
            q:   'How do you implement form validation in React?',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> Three common approaches — from manual to library-based:
                <br/><br/>1. <strong>Manual validation</strong> — validate in the submit handler or on blur, store errors in state.
                <br/>2. <strong>Custom Hook</strong> — extract reusable validation logic.
                <br/>3. <strong>Library</strong> (React Hook Form + Yup/Zod, Formik) — schema-driven validation with minimal boilerplate.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">JSX</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>// Manual validation on submit
const validate = (form) =&gt; {
  const errs = {};
  if (!form.email.includes('@'))   errs.email    = 'Invalid email';
  if (form.password.length &lt; 8)    errs.password = 'Min 8 characters';
  return errs;
};

const handleSubmit = (e) =&gt; {
  e.preventDefault();
  const errs = validate(form);
  if (Object.keys(errs).length) { setErrors(errs); return; }
  submitAPI(form);
};</code></pre>
              </div>`
          },
          {
            q:   'What is React Hook Form and why use it over manual forms?',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> <strong>React Hook Form (RHF)</strong> is a performant form library that uses <strong>uncontrolled components internally</strong> (via refs), avoiding React re-renders on every keystroke. 
                <br/><br/><strong>Advantages over manual forms:</strong>
                <br/>• <strong>Performance</strong> — no re-render on each keystroke (uncontrolled inputs).
                <br/>• <strong>Less boilerplate</strong> — no manual onChange, state, or error objects.
                <br/>• <strong>Schema validation</strong> — integrates seamlessly with Yup, Zod, Joi.
                <br/>• <strong>Nested fields, arrays, watch</strong> — advanced features out of the box.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">JSX</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
  email:    z.string().email(),
  password: z.string().min(8),
});

function LoginForm() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema)
  });

  return (
    &lt;form onSubmit={handleSubmit(data =&gt; loginAPI(data))}&gt;
      &lt;input {...register('email')} /&gt;
      {errors.email &amp;&amp; &lt;p&gt;{errors.email.message}&lt;/p&gt;}
      &lt;button type="submit"&gt;Login&lt;/button&gt;
    &lt;/form&gt;
  );
}</code></pre>
              </div>`
          },
          {
            q:   'How do you type React props with TypeScript?',
            tag: 'easy',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> Define an <code>interface</code> or <code>type</code> for the component's props and pass it as a generic type parameter to the component function.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">TypeScript</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>interface UserCardProps {
  name:      string;
  age:       number;
  email?:    string;               // optional prop
  onDelete:  (id: number) =&gt; void; // function prop
  children?: React.ReactNode;      // accepts JSX children
}

const UserCard: React.FC&lt;UserCardProps&gt; = ({ name, age, onDelete }) =&gt; (
  &lt;div&gt;
    &lt;h2&gt;{name}&lt;/h2&gt;
    &lt;p&gt;{age}&lt;/p&gt;
    &lt;button onClick={() =&gt; onDelete(1)}&gt;Delete&lt;/button&gt;
  &lt;/div&gt;
);</code></pre>
              </div>`
          },
          {
            q:   'Should you use <code>React.FC</code> to type functional components?',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> It's a matter of debate. <code>React.FC</code> (or <code>React.FunctionComponent</code>) has two drawbacks:
                <br/><br/>1. It automatically adds <code>children?: React.ReactNode</code> to props (pre-React 18), which was often unintentional.
                <br/>2. It disallows returning <code>undefined</code> (must return <code>null</code> for no output).
                <br/><br/>The <strong>React TypeScript community recommendation</strong> is to type the <em>props</em> explicitly and let TypeScript infer the return type:
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">TypeScript</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>// ❌ Less preferred
const Button: React.FC&lt;ButtonProps&gt; = ({ label }) =&gt; &lt;button&gt;{label}&lt;/button&gt;;

// ✅ Preferred — inferred return type, no implicit children
function Button({ label }: ButtonProps) {
  return &lt;button&gt;{label}&lt;/button&gt;;
}</code></pre>
              </div>`
          },
          {
            q:   'How do you type event handlers in React with TypeScript?',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> React's synthetic event system provides typed event objects. Common event types from <code>React</code> namespace:
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">TypeScript</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>// Input change
const handleChange = (e: React.ChangeEvent&lt;HTMLInputElement&gt;) =&gt; {
  setValue(e.target.value);
};

// Form submit
const handleSubmit = (e: React.FormEvent&lt;HTMLFormElement&gt;) =&gt; {
  e.preventDefault();
};

// Button click
const handleClick = (e: React.MouseEvent&lt;HTMLButtonElement&gt;) =&gt; {
  console.log(e.currentTarget);
};

// Select change
const handleSelect = (e: React.ChangeEvent&lt;HTMLSelectElement&gt;) =&gt; {
  setCategory(e.target.value);
};</code></pre>
              </div>`
          },
          {
            q:   'How do you type <code>useRef</code> with TypeScript?',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> <code>useRef</code> has two overloads in TypeScript:
                <br/><br/>• <code>useRef&lt;T&gt;(initialValue)</code> where <code>initialValue</code> is <code>T</code> — returns a <code>MutableRefObject&lt;T&gt;</code> (mutable ref).
                <br/>• <code>useRef&lt;T&gt;(null)</code> — returns a <code>RefObject&lt;T&gt;</code> (read-only current, for DOM refs).
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">TypeScript</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>// DOM ref — type the HTML element
const inputRef = useRef&lt;HTMLInputElement&gt;(null);
inputRef.current?.focus();   // optional chaining because current can be null

// Mutable ref — storing a value (timer ID, counter)
const timerRef = useRef&lt;ReturnType&lt;typeof setTimeout&gt; | null&gt;(null);
timerRef.current = setTimeout(fn, 1000);</code></pre>
              </div>`
          },
          {
            q:   'What is React Testing Library and how does it differ from Enzyme?',
            tag: 'easy',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> Both are React testing utilities, but with fundamentally different philosophies:
                <br/><br/>• <strong>React Testing Library (RTL)</strong> — tests from the user's perspective. Query by accessible roles, text, and labels. Encourages testing behaviour, not implementation. Ships with React by default (CRA, Vite). ✅ Modern standard.
                <br/>• <strong>Enzyme</strong> — tests component internals (state, props, instance methods). Tightly coupled to implementation. Shallow rendering available. ❌ No longer maintained for React 18+.
                <br/><br/><strong>RTL guiding principle:</strong> "The more your tests resemble the way your software is used, the more confidence they give you."
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">JSX</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>// RTL — test what the user sees
test('shows welcome message', () =&gt; {
  render(&lt;Welcome name="Alice" /&gt;);
  expect(screen.getByText('Hello, Alice!')).toBeInTheDocument();
});

test('button click increments count', async () =&gt; {
  render(&lt;Counter /&gt;);
  await userEvent.click(screen.getByRole('button', { name: '+' }));
  expect(screen.getByText('Count: 1')).toBeInTheDocument();
});</code></pre>
              </div>`
          },
          {
            q:   'How do you write a unit test for a React component?',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> A React component test with RTL + Jest follows the <strong>Arrange → Act → Assert</strong> pattern:
                <br/>1. <strong>Render</strong> the component with test props.
                <br/>2. <strong>Query</strong> elements by role, text, label, testid.
                <br/>3. <strong>Interact</strong> using <code>userEvent</code> (preferred over <code>fireEvent</code>).
                <br/>4. <strong>Assert</strong> expected output.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">JSX</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import LoginForm from './LoginForm';

describe('LoginForm', () =&gt; {
  it('disables submit when fields are empty', () =&gt; {
    render(&lt;LoginForm onSubmit={jest.fn()} /&gt;);
    expect(screen.getByRole('button', { name: /login/i })).toBeDisabled();
  });

  it('calls onSubmit with email and password', async () =&gt; {
    const onSubmit = jest.fn();
    render(&lt;LoginForm onSubmit={onSubmit} /&gt;);

    await userEvent.type(screen.getByLabelText(/email/i), 'alice@test.com');
    await userEvent.type(screen.getByLabelText(/password/i), 'secret123');
    await userEvent.click(screen.getByRole('button', { name: /login/i }));

    expect(onSubmit).toHaveBeenCalledWith({ email: 'alice@test.com', password: 'secret123' });
  });
});</code></pre>
              </div>`
          },
          {
            q:   'How do you test a component that uses <code>useEffect</code> for data fetching?',
            tag: 'hard',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> Mock the data-fetching function (Axios, fetch) to avoid real HTTP calls. Use <code>waitFor</code> or <code>findBy*</code> queries (which wait for async updates) to assert the rendered result.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">JSX</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>// Mock module
jest.mock('../api/userService');
import { fetchUser } from '../api/userService';

test('displays user name after loading', async () =&gt; {
  fetchUser.mockResolvedValueOnce({ id: 1, name: 'Alice' });

  render(&lt;UserProfile userId={1} /&gt;);

  // Initially shows loader
  expect(screen.getByRole('progressbar')).toBeInTheDocument();

  // Wait for async update
  expect(await screen.findByText('Alice')).toBeInTheDocument();
  expect(screen.queryByRole('progressbar')).not.toBeInTheDocument();
});</code></pre>
              </div>`
          },
          {
            q:   'How do you test custom React Hooks?',
            tag: 'hard',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> Use <code>renderHook</code> from <code>@testing-library/react</code>. It renders the hook in a test component and gives you access to its return values.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">JSX</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>import { renderHook, act } from '@testing-library/react';
import { useCounter } from './useCounter';

test('increments counter', () =&gt; {
  const { result } = renderHook(() =&gt; useCounter(0));

  expect(result.current.count).toBe(0);

  act(() =&gt; result.current.increment());

  expect(result.current.count).toBe(1);
});

test('resets counter', () =&gt; {
  const { result } = renderHook(() =&gt; useCounter(5));
  act(() =&gt; result.current.reset());
  expect(result.current.count).toBe(0);
});</code></pre>
              </div>`
          },
          {
            q:   'What is snapshot testing and what are its trade-offs?',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> <strong>Snapshot testing</strong> renders a component and saves its output (as a text file). On subsequent runs, the new output is compared against the saved snapshot. If they differ, the test fails.
                <br/><br/><strong>Pros:</strong>
                <br/>• Easy to add — one line catches any unexpected UI regression.
                <br/>• Good for components with complex rendering logic.
                <br/><br/><strong>Cons:</strong>
                <br/>• <strong>Too easy to update carelessly</strong> — developers often run <code>jest --updateSnapshot</code> without reviewing the diff.
                <br/>• <strong>Tests implementation, not behaviour</strong> — any code refactor (same output, different structure) breaks the snapshot needlessly.
                <br/>• Large snapshots are hard to review in PRs.
                <br/><br/><strong>Recommendation:</strong> Prefer behaviour-based tests with RTL; use snapshots sparingly for small, stable components.
              </p>`
          },
          {
            q:   'What are the best practices for testing React applications?',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong>
                <br/>1. <strong>Test behaviour, not implementation</strong> — what the user sees and does, not internal state.
                <br/>2. <strong>Query by accessibility roles first</strong> — <code>getByRole</code> &gt; <code>getByLabelText</code> &gt; <code>getByText</code> &gt; <code>getByTestId</code> (last resort).
                <br/>3. <strong>Use <code>userEvent</code> over <code>fireEvent</code></strong> — more closely simulates real user interaction.
                <br/>4. <strong>Mock at the boundary</strong> — mock API calls/modules, not internal functions.
                <br/>5. <strong>Arrange → Act → Assert</strong> — clear test structure.
                <br/>6. <strong>Test edge cases</strong> — loading, error, empty states.
                <br/>7. <strong>Integration tests over unit tests</strong> — test components that work together.
                <br/>8. <strong>Coverage as a guide, not a goal</strong> — 80% meaningful coverage &gt; 100% trivial coverage.
              </p>`
          },
          {
            q:   'What is the React <code>act()</code> utility and why do tests need it?',
            tag: 'hard',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> <code>act()</code> ensures that all state updates, effects, and re-renders triggered by a UI interaction are processed and flushed before your assertions run. Without it, assertions might run before React finishes updating the DOM.
                <br/><br/>React Testing Library's <code>userEvent</code>, <code>render</code>, and <code>waitFor</code> automatically wrap operations in <code>act()</code>. You only need to call <code>act()</code> manually when dealing with:
                <br/>• State updates triggered outside React (WebSocket messages, timers).
                <br/>• Custom hooks with <code>renderHook</code>.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">JSX</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>// Manual act() needed — state updated from outside React
import { act } from '@testing-library/react';

test('updates on WebSocket message', () =&gt; {
  render(&lt;LiveFeed /&gt;);
  act(() =&gt; {
    ws.mockMessage({ type: 'update', data: 'new item' });
  });
  expect(screen.getByText('new item')).toBeInTheDocument();
});</code></pre>
              </div>`
          },
          {
            q:   'What is Formik and how does it compare to React Hook Form?',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> <strong>Formik</strong> is a form management library using controlled inputs; it stores all form state in React state. <strong>React Hook Form (RHF)</strong> uses uncontrolled inputs via refs. 
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Text</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>Feature               Formik                 React Hook Form
-----------------     ------------------     ----------------------
Input control         Controlled (state)     Uncontrolled (refs)
Re-renders on type    Yes (every keystroke)  No (much faster)
Bundle size           ~13 KB                 ~9 KB
TypeScript            Good                   Excellent
Schema validation     Yup                    Yup, Zod, Joi, etc.
Learning curve        Moderate               Low
Recommendation        Legacy/existing code   New projects ✅</code></pre>
              </div>`
          }
        ]
      },
      // ════════════════════════════════════════
      //  DAY 17
      // ════════════════════════════════════════
      {
        id:     'day17',
        day:    17,
        title:  'GraphQL Fundamentals',
        topics: ['What is GraphQL', 'Query vs Mutation', 'Schema', 'Scalar Types', 'Resolvers', 'Aliases', 'Fragments', 'Directives', 'GraphQL vs REST', 'Unions & Interfaces'],
        questions: [
          {
            q:   'What is GraphQL?',
            tag: 'easy',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> GraphQL is both a <strong>query language for APIs</strong> and a <strong>server-side runtime</strong> for executing those queries, developed by Meta and open-sourced in 2015. Unlike REST — which has a fixed URL per resource — GraphQL exposes a <strong>single endpoint</strong> where clients can request exactly the data they need in a single query, preventing over-fetching and under-fetching.
                <br/><br/><strong>Key characteristics:</strong>
                <br/>• <strong>Client-specified queries</strong> — the client defines the shape and depth of the response.
                <br/>• <strong>Strongly typed schema</strong> — the API is described by a type system; all queries are validated against it.
                <br/>• <strong>Single endpoint</strong> — typically <code>POST /graphql</code>.
                <br/>• <strong>Hierarchical</strong> — queries mirror the shape of the data returned.
                <br/>• <strong>Introspective</strong> — clients can query the schema itself to discover available types and operations.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">GraphQL</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code># REST: GET /users/1 → returns ALL user fields
# GraphQL: ask for only what you need
query {
  user(id: "1") {
    name
    email
    # phone, address, etc. NOT fetched — no over-fetching
  }
}</code></pre>
              </div>`
          },
          {
            q:   'What is the difference between a query and a mutation in GraphQL?',
            tag: 'easy',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong>
                <br/>• <strong>Query</strong> — reads data (equivalent to HTTP GET). Queries are <strong>safe and idempotent</strong> — no side effects on the server.
                <br/>• <strong>Mutation</strong> — writes data (create, update, delete — equivalent to HTTP POST/PUT/PATCH/DELETE). Mutations have side effects.
                <br/>• <strong>Subscription</strong> — a third operation type for <strong>real-time updates</strong> over a persistent connection (WebSocket).
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">GraphQL</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code># Query — read user
query GetUser($id: ID!) {
  user(id: $id) { name email }
}

# Mutation — create user
mutation CreateUser($input: CreateUserInput!) {
  createUser(input: $input) {
    id name email
  }
}

# Subscription — real-time messages
subscription {
  newMessage(roomId: "general") { text author createdAt }
}</code></pre>
              </div>`
          },
          {
            q:   'What is a GraphQL schema?',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> A GraphQL schema is the <strong>blueprint of the API</strong> — it defines every type of data, every relationship between types, and every operation (query, mutation, subscription) that clients can perform. The schema acts as a <strong>contract</strong> between the client and server.
                <br/><br/>Written in SDL (Schema Definition Language). Every schema must have at minimum a <code>Query</code> type (the root for read operations).
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">GraphQL</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>type User {
  id:    ID!
  name:  String!
  email: String!
  posts: [Post!]!
}

type Post {
  id:      ID!
  title:   String!
  content: String
  author:  User!
}

type Query {
  user(id: ID!): User
  posts: [Post!]!
}

type Mutation {
  createUser(name: String!, email: String!): User!
}</code></pre>
              </div>`
          },
          {
            q:   'What are scalar types in GraphQL?',
            tag: 'easy',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> <strong>Scalar types</strong> are the leaf nodes of a GraphQL query — they represent concrete, primitive values that don't have sub-fields.
                <br/><br/><strong>Built-in scalars:</strong>
                <br/>• <code>String</code> — UTF-8 text.
                <br/>• <code>Int</code> — 32-bit signed integer.
                <br/>• <code>Float</code> — double-precision floating point.
                <br/>• <code>Boolean</code> — <code>true</code> or <code>false</code>.
                <br/>• <code>ID</code> — unique identifier (serialized as String; typically used for cache keys).
                <br/><br/><strong>Custom scalars</strong> — you can define your own: <code>scalar Date</code>, <code>scalar Email</code>, <code>scalar JSON</code>. The server implements serialization/deserialization and validation.
              </p>`
          },
          {
            q:   'What does an exclamation point (<code>!</code>) mean in GraphQL?',
            tag: 'easy',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> The <code>!</code> (bang) in GraphQL means <strong>non-nullable</strong> — the value must always be present and cannot be <code>null</code>.
                <br/><br/>• <code>String</code> — can be null or a string.
                <br/>• <code>String!</code> — always a string (never null).
                <br/>• <code>[String]</code> — the list itself can be null; items can be null.
                <br/>• <code>[String!]!</code> — the list is always returned AND each item is always a string.
                <br/><br/><strong>Where it appears:</strong>
                <br/>• Field types in schema: <code>name: String!</code>.
                <br/>• Arguments: <code>user(id: ID!)</code> — client must provide <code>id</code>.
                <br/><br/>Violating non-nullability causes GraphQL to propagate <code>null</code> up the tree to the nearest nullable parent field.
              </p>`
          },
          {
            q:   'What are resolvers in GraphQL?',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> A <strong>resolver</strong> is a function that provides the value for a specific field in the schema. For every field in the schema, there is (implicitly or explicitly) a resolver that tells GraphQL how to fetch that data — from a database, REST API, cache, or any source.
                <br/><br/><strong>Resolver signature:</strong> <code>(parent, args, context, info)</code>
                <br/>• <code>parent</code> — the resolved value of the parent type.
                <br/>• <code>args</code> — arguments passed to the field in the query.
                <br/>• <code>context</code> — shared object (auth user, DB connection, dataloaders).
                <br/>• <code>info</code> — execution metadata (field name, path, schema).
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">JavaScript</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>const resolvers = {
  Query: {
    user: async (_, { id }, context) =&gt; {
      return context.db.users.findById(id);
    },
    posts: (_, __, context) =&gt; context.db.posts.findAll(),
  },
  User: {
    posts: (parent, _, context) =&gt; {
      return context.db.posts.findByAuthor(parent.id);  // parent = User object
    },
  },
  Mutation: {
    createUser: (_, { name, email }, context) =&gt;
      context.db.users.create({ name, email }),
  },
};</code></pre>
              </div>`
          },
          {
            q:   'When is GraphQL useful?',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> GraphQL is useful when:
                <br/>• <strong>Multiple clients with different data needs</strong> — mobile, web, and desktop apps often need different subsets of the same data. GraphQL lets each client query exactly what it needs.
                <br/>• <strong>Avoiding over/under-fetching</strong> — REST endpoints return fixed shapes; GraphQL responses match the query exactly.
                <br/>• <strong>Complex relationships</strong> — deeply nested or interconnected data models (social networks, e-commerce, CMS).
                <br/>• <strong>Rapid API evolution</strong> — add new fields without versioning; deprecate fields gradually.
                <br/>• <strong>Aggregating multiple services</strong> — use GraphQL as a BFF (Backend for Frontend) that calls multiple microservices and returns a unified response.
                <br/><br/><strong>NOT ideal for:</strong> Simple CRUD with uniform clients, file uploads (work but awkward), or when HTTP caching is critical.
              </p>`
          },
          {
            q:   'What are the key concepts of the GraphQL query language?',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong>
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Text</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>Concept           Description                          Example
--------------    ---------------------------------    ----------------------------------
Operation type    query / mutation / subscription      query GetUser { ... }
Fields            Data to retrieve                     { user { name email } }
Arguments         Filter / parameterize fields         user(id: "42")
Variables         Dynamic values in operations         ($id: ID!)
Aliases           Rename a field in the response       me: user(id: "1")
Fragments         Reusable field selections            fragment UserInfo on User
Directives        Conditional execution                @include(if: $showEmail)
Inline fragments  Type-specific fields                 ... on Admin { permissions }
Introspection     Query the schema itself              { __schema { types { name } } }</code></pre>
              </div>`
          },
          {
            q:   'What is the difference between GraphQL and REST?',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong>
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Text</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>Feature                REST                         GraphQL
-------------------    --------------------------   ----------------------------
Endpoints              Multiple (one per resource)  Single (/graphql)
Data fetching          Fixed response shape         Client-specified fields
Over/Under fetching    Common problem               Solved by design
HTTP methods           GET, POST, PUT, DELETE        POST (usually)
Versioning             URL (/v1, /v2)               Schema evolution (deprecation)
Caching                Easy (HTTP cache, CDN)        Needs special handling (APQ)
Real-time              Polling / Server-Sent Events  Native subscriptions
File upload            Simple multipart             Possible but complex
Learning curve         Low                          Moderate
Best for               Simple CRUD APIs             Complex, multi-client APIs</code></pre>
              </div>`
          },
          {
            q:   'What are the advantages and disadvantages of GraphQL?',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong>
                <br/><br/><strong>Advantages:</strong>
                <br/>• Precise data fetching — no over/under-fetching.
                <br/>• Single request for multiple resources (vs REST's multiple round trips).
                <br/>• Strongly typed schema — self-documenting, validated at build time.
                <br/>• Easier frontend development — query what you need.
                <br/>• Rapid API evolution — add fields without versioning.
                <br/><br/><strong>Disadvantages:</strong>
                <br/>• <strong>N+1 problem</strong> — naive resolvers can trigger many DB queries (needs DataLoader).
                <br/>• <strong>Caching complexity</strong> — HTTP caching doesn't work naturally; needs client-side cache (Apollo, URQL).
                <br/>• <strong>Complex queries</strong> — malicious or deeply nested queries can overload the server (needs rate limiting, complexity analysis).
                <br/>• <strong>Steeper learning curve</strong> — schema design, resolver architecture.
                <br/>• <strong>File uploads</strong> are not natively supported.
              </p>`
          },
          {
            q:   'What are aliases in GraphQL and why use them?',
            tag: 'easy',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> An <strong>alias</strong> renames a field in the response. This is essential when you need to query the <strong>same field multiple times with different arguments</strong> in a single query — without an alias, both would have the same key in the response and clash.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">GraphQL</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code># Without alias — would fail (duplicate "user" keys in response)
query {
  user(id: "1") { name }
  user(id: "2") { name }   # ❌ conflict
}

# With aliases — works perfectly
query {
  alice: user(id: "1") { name }
  bob:   user(id: "2") { name }
}
# Response: { "alice": { "name": "Alice" }, "bob": { "name": "Bob" } }</code></pre>
              </div>`
          },
          {
            q:   'What are fragments in GraphQL?',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> A <strong>fragment</strong> is a reusable selection of fields on a specific type. Fragments follow the DRY principle — define field sets once and reference them in multiple queries or mutations.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">GraphQL</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>fragment UserBasic on User {
  id
  name
  email
  avatarUrl
}

query GetUser($id: ID!) {
  user(id: $id) {
    ...UserBasic       # spread the fragment
    createdAt
  }
}

query GetAllUsers {
  users {
    ...UserBasic       # reuse same fragment
    role
  }
}</code></pre>
              </div>`
          },
          {
            q:   'What are directives in GraphQL?',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> <strong>Directives</strong> provide a way to dynamically alter the execution or validation of a query. They start with <code>@</code>.
                <br/><br/><strong>Built-in directives:</strong>
                <br/>• <code>@include(if: Boolean)</code> — include the field/fragment only if the condition is <code>true</code>.
                <br/>• <code>@skip(if: Boolean)</code> — skip the field/fragment if <code>true</code>.
                <br/>• <code>@deprecated(reason: "...")</code> — marks a schema field as deprecated.
                <br/><br/><strong>Custom directives</strong> can be defined in the schema to add auth checks, rate limiting, field transformations, etc.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">GraphQL</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>query GetUser($id: ID!, $showEmail: Boolean!) {
  user(id: $id) {
    name
    email   @include(if: $showEmail)  # only if showEmail=true
    phone   @skip(if: $showEmail)     # only if showEmail=false
  }
}</code></pre>
              </div>`
          },
          {
            q:   'What are unions and interfaces in GraphQL?',
            tag: 'hard',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong>
                <br/>• <strong>Interface</strong> — defines a set of fields that multiple types must implement. Like a Java interface. Useful for polymorphic fields where different types share common fields.
                <br/>• <strong>Union</strong> — a field that can be one of several types that don't necessarily share fields. Each type in the union may be completely different.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">GraphQL</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code># Interface — shared fields
interface Node { id: ID! }
type User    implements Node { id: ID!; name: String! }
type Product implements Node { id: ID!; title: String! }

# Union — no shared fields required
union SearchResult = User | Product | Article

query {
  search(query: "alice") {
    ... on User    { name email }     # inline fragment per type
    ... on Product { title price }
    ... on Article { headline body }
  }
}</code></pre>
              </div>`
          },
          {
            q:   'What is an object type in GraphQL?',
            tag: 'easy',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> An <strong>Object Type</strong> is the most common type in a GraphQL schema. It represents a structured data object with named fields, each with their own type. Object types are the building blocks of the schema — they describe the entities in your domain (User, Post, Order, etc.).
                <br/><br/>Every field in an object type has:
                <br/>• A name.
                <br/>• A type (scalar or another object type).
                <br/>• Optional arguments (to parameterize the field).
                <br/>• Optional <code>@deprecated</code> directive.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">GraphQL</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>type Order {
  id:          ID!
  createdAt:   String!
  totalAmount: Float!
  status:      OrderStatus!   # enum type
  customer:    User!          # reference to another object type
  items:       [OrderItem!]!  # list of object types
}</code></pre>
              </div>`
          }
        ]
      },
      // ════════════════════════════════════════
      //  DAY 18
      // ════════════════════════════════════════
      {
        id:     'day18',
        day:    18,
        title:  'GraphQL Intermediate',
        topics: ['Variables', 'Introspection', 'Authentication & Authorization', 'Error Handling', 'N+1 Problem', 'DataLoader', 'Caching', 'Input Types', 'Pagination', 'Mutations', 'Subscriptions'],
        questions: [
          {
            q:   'What are variables in GraphQL and how do you use them?',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> <strong>Variables</strong> allow dynamic values to be passed to a GraphQL operation at runtime — avoiding hardcoded arguments and enabling query reuse. Variables are declared in the operation signature with a <code>$</code> prefix and a type, then passed as a separate JSON object alongside the query.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">GraphQL</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code># Operation — declare variable $userId of type ID (non-nullable)
query GetUser($userId: ID!, $showPosts: Boolean = true) {
  user(id: $userId) {
    name
    email
    posts @include(if: $showPosts) { title }
  }
}

# Variables JSON (sent alongside the query)
{
  "userId": "42",
  "showPosts": false
}</code></pre>
              </div>`
          },
          {
            q:   'What is introspection in GraphQL and how is it useful?',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> <strong>Introspection</strong> is GraphQL's ability to answer queries about its own schema — what types exist, what fields each type has, what operations are available, and what directives are supported.
                <br/><br/><strong>Uses:</strong>
                <br/>• <strong>GraphiQL / GraphQL Playground / Apollo Studio</strong> — use introspection to show autocomplete and documentation.
                <br/>• <strong>Code generation</strong> — tools like <code>graphql-codegen</code> introspect the schema to generate TypeScript types for queries.
                <br/>• <strong>Client validation</strong> — validate queries against the schema at build time.
                <br/><br/><strong>Security note:</strong> Disable introspection in production if the API is public or sensitive — it reveals the entire schema to potential attackers.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">GraphQL</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code># Introspection query — list all types
{
  __schema {
    types { name kind description }
  }
}

# Inspect a specific type
{
  __type(name: "User") {
    fields { name type { name kind } }
  }
}</code></pre>
              </div>`
          },
          {
            q:   'How do you handle authentication and authorization in GraphQL?',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong>
                <br/>• <strong>Authentication</strong> (who is the user?) — handled outside GraphQL at the HTTP layer. A JWT or session token is sent in the <code>Authorization</code> header. The GraphQL server middleware parses it and attaches the user to the <strong>context</strong> object, making it available in all resolvers.
                <br/>• <strong>Authorization</strong> (what can the user access?) — implemented inside resolvers or via middleware/directives. Resolvers check <code>context.user</code> before returning data.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">JavaScript</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>// Auth context setup
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) =&gt; {
    const token = req.headers.authorization?.split(' ')[1];
    const user  = token ? verifyJwt(token) : null;
    return { user, db };
  }
});

// Resolver — authorization check
const resolvers = {
  Mutation: {
    deletePost: (_, { id }, { user, db }) =&gt; {
      if (!user)            throw new AuthenticationError('Not logged in');
      if (user.role !== 'ADMIN') throw new ForbiddenError('Not allowed');
      return db.posts.delete(id);
    }
  }
};</code></pre>
              </div>`
          },
          {
            q:   'How do you do error handling in GraphQL?',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> Unlike REST where errors are communicated via HTTP status codes, GraphQL <strong>always returns HTTP 200</strong>. Errors are returned inside the response body alongside data, in an <code>errors</code> array.
                <br/><br/>A response can have both partial <code>data</code> AND <code>errors</code> — if one resolver fails, other resolvers' data is still returned.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">JSON</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>// Partial success response
{
  "data": {
    "user": { "name": "Alice" },
    "posts": null                // this resolver failed
  },
  "errors": [{
    "message": "Database connection failed",
    "locations": [{ "line": 3, "column": 5 }],
    "path": ["posts"],
    "extensions": {
      "code": "DB_ERROR",       // custom error code
      "timestamp": "2024-01-15T10:30:00Z"
    }
  }]
}</code></pre>
              </div>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">JavaScript</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>// Apollo Server typed errors
throw new UserInputError('Invalid email format', { field: 'email' });
throw new AuthenticationError('Please log in');
throw new ForbiddenError('Insufficient permissions');
throw new ApolloError('Something went wrong', 'CUSTOM_CODE');</code></pre>
              </div>`
          },
          {
            q:   'How do you handle and report errors in a production GraphQL API?',
            tag: 'hard',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong>
                <br/><br/>1. <strong>Never expose internal errors to clients</strong> — catch errors in resolvers and return user-friendly messages. Log the real error to your monitoring system (Datadog, Sentry, CloudWatch).
                <br/>2. <strong>Use error codes</strong> — add an <code>extensions.code</code> field so clients can handle specific error types programmatically.
                <br/>3. <strong>Differentiate error types</strong>:
                  <br/>&nbsp;&nbsp;— User errors (validation, not found) — safe to expose.
                  <br/>&nbsp;&nbsp;— System errors (DB down, timeout) — mask and log.
                <br/>4. <strong>Mask sensitive data</strong> — never return stack traces, DB query details, or internal IDs in production.
                <br/>5. <strong>Monitor error rates</strong> — alert on spikes in error rates per operation.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">JavaScript</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>const server = new ApolloServer({
  formatError: (error) =&gt; {
    // Log full error internally
    logger.error({ message: error.message, stack: error.extensions?.stacktrace });

    // Mask internal errors in response
    if (error.extensions?.code === 'INTERNAL_SERVER_ERROR') {
      return new Error('An unexpected error occurred. Please try again.');
    }
    return error;  // pass user errors through as-is
  }
});</code></pre>
              </div>`
          },
          {
            q:   'How can you implement versioning in a GraphQL API without breaking existing clients?',
            tag: 'hard',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> GraphQL is designed to <strong>evolve without explicit versioning</strong>. Strategies:
                <br/><br/>1. <strong>Additive changes only</strong> — add new fields and types freely. Old clients ignoring new fields are unaffected.
                <br/>2. <strong>Deprecate, don't delete</strong> — mark old fields with <code>@deprecated</code>. Give clients time to migrate. Only remove after zero usage is confirmed (via logging).
                <br/>3. <strong>Field aliases</strong> — introduce a new field with different behaviour alongside the old one.
                <br/>4. <strong>Argument changes</strong> — add new optional arguments with defaults; existing queries continue to work.
                <br/><br/>This approach is called <strong>continuous / evolutionary evolution</strong>. Unlike REST where breaking changes force a version bump, GraphQL schema evolution is gentler.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">GraphQL</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>type User {
  name:     String!
  fullName: String! @deprecated(reason: "Use 'name' instead")  # old field
  email:    String!
  # New field added — old clients safely ignore it
  profileImageUrl: String
}</code></pre>
              </div>`
          },
          {
            q:   'What is the N+1 problem in GraphQL and how do you solve it?',
            tag: 'hard',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> The <strong>N+1 problem</strong> occurs when fetching a list of N items causes N additional database queries to load related data for each item — 1 query for the list + N individual queries.
                <br/><br/><strong>Example:</strong> Query 10 users → for each user, load their posts → 11 DB queries total.
                <br/><br/><strong>Solution: DataLoader</strong> — batches individual loads into a single batch query and caches results within the request.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">JavaScript</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>// ❌ N+1 — each user.posts call hits the DB separately
User: {
  posts: (user, _, { db }) =&gt; db.posts.findByUserId(user.id)
  // 10 users = 10 separate DB queries
}

// ✅ DataLoader — batches all user IDs into ONE query
const postsLoader = new DataLoader(async (userIds) =&gt; {
  const posts = await db.posts.findByUserIds(userIds);
  return userIds.map(id =&gt; posts.filter(p =&gt; p.userId === id));
  // SELECT * FROM posts WHERE user_id IN (1, 2, ..., 10) — 1 query!
});

User: {
  posts: (user, _, { loaders }) =&gt; loaders.posts.load(user.id)
}</code></pre>
              </div>`
          },
          {
            q:   'What is DataLoader and how does it work?',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> <strong>DataLoader</strong> (by Meta) is a utility that provides two features for GraphQL resolvers:
                <br/><br/>1. <strong>Batching</strong> — collects all individual <code>load(key)</code> calls made within a single event loop tick, then calls the batch function with all keys at once.
                <br/>2. <strong>Caching</strong> — within a single request, calling <code>load(key)</code> with the same key multiple times returns the cached promise (no duplicate DB queries).
                <br/><br/><strong>Create a new DataLoader per request</strong> (in the context factory) — never share across requests to avoid stale data.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">JavaScript</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>// Context — new loaders per request
context: ({ req }) =&gt; ({
  user: getUser(req),
  loaders: {
    users: new DataLoader(ids =&gt; batchLoadUsers(ids)),
    posts: new DataLoader(userIds =&gt; batchLoadPostsByUser(userIds)),
  }
});

// Batch function — called once with all accumulated keys
async function batchLoadUsers(ids) {
  const users = await db.query('SELECT * FROM users WHERE id = ANY($1)', [ids]);
  return ids.map(id =&gt; users.find(u =&gt; u.id === id));
}</code></pre>
              </div>`
          },
          {
            q:   'What are <code>input</code> types in GraphQL?',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> <strong>Input types</strong> are like object types but used exclusively as <strong>arguments</strong> to mutations and queries. You cannot query their fields directly — they are input-only. They are declared with the <code>input</code> keyword.
                <br/><br/><strong>Why use input types?</strong> Without them, you'd need to list every argument individually in the mutation signature. Input types group related args and make reuse easy (the same input can be used by create and update mutations).
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">GraphQL</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code># Input type definition
input CreateUserInput {
  name:     String!
  email:    String!
  password: String!
  role:     UserRole = USER   # default value
}

# Used in mutation
type Mutation {
  createUser(input: CreateUserInput!): User!
  updateUser(id: ID!, input: CreateUserInput!): User!
}

# Query usage
mutation {
  createUser(input: { name: "Alice", email: "a@test.com", password: "s3cr3t" }) {
    id name
  }
}</code></pre>
              </div>`
          },
          {
            q:   'How do you implement pagination in GraphQL (Cursor vs Offset)?',
            tag: 'hard',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> Two pagination approaches:
                <br/><br/><strong>Offset pagination</strong> — simple (page/size or skip/take). Easy to implement but unreliable for frequently changing data (new items cause duplicates/gaps across pages).
                <br/><br/><strong>Cursor-based pagination (Relay Connections)</strong> — uses an opaque cursor pointing to a specific item. More stable; recommended for large or live datasets.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">GraphQL</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code># Cursor-based — Relay Connection spec
type UserConnection {
  edges:    [UserEdge!]!
  pageInfo: PageInfo!
}
type UserEdge { cursor: String!; node: User! }
type PageInfo { hasNextPage: Boolean!; endCursor: String }

type Query {
  users(first: Int, after: String): UserConnection!  # forward pagination
}

# Client query
query {
  users(first: 10, after: "cursor123") {
    edges { node { name email } cursor }
    pageInfo { hasNextPage endCursor }
  }
}</code></pre>
              </div>`
          },
          {
            q:   'What is caching in GraphQL and what are the challenges?',
            tag: 'hard',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> GraphQL caching is more complex than REST because:
                <br/><br/>• All requests go to a <strong>single URL via POST</strong> — HTTP GET-based CDN caching doesn't apply by default.
                <br/>• Query shape varies per client — the same resource may be requested in many different forms.
                <br/><br/><strong>Caching strategies:</strong>
                <br/>1. <strong>Persisted Queries</strong> — register queries with a server-side ID; GET requests with ID enable CDN caching.
                <br/>2. <strong>Apollo Client normalised cache</strong> — client-side cache keyed by type + ID. Automatically updates when mutations return data.
                <br/>3. <strong>HTTP GET + Automatic Persisted Queries (APQ)</strong> — first request sends hash; server returns query text if hash is unknown.
                <br/>4. <strong>Redis/server-side cache</strong> — cache resolver results by key for expensive computations.
              </p>`
          },
          {
            q:   'What is a GraphQL subscription? How does it work?',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> A <strong>subscription</strong> is the third GraphQL operation type (alongside query and mutation). It establishes a <strong>persistent connection</strong> (usually via WebSocket) and pushes updates to the client whenever the subscribed event occurs on the server.
                <br/><br/><strong>Use cases:</strong> live chat, real-time notifications, live dashboards, collaborative editing.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">GraphQL</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code># Schema
type Subscription {
  messageAdded(roomId: ID!): Message!
}

# Client subscribes
subscription {
  messageAdded(roomId: "general") {
    id text author { name } createdAt
  }
}

# Server resolver — publishes on mutation
Mutation: {
  sendMessage: async (_, args, { pubsub }) =&gt; {
    const msg = await db.messages.create(args);
    pubsub.publish('MESSAGE_ADDED', { messageAdded: msg, roomId: args.roomId });
    return msg;
  }
},
Subscription: {
  messageAdded: {
    subscribe: (_, { roomId }, { pubsub }) =&gt;
      pubsub.asyncIterator(\`MESSAGE_ADDED_\${roomId}\`)
  }
}</code></pre>
              </div>`
          },
          {
            q:   'What are mutations and how do you structure them well?',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> Mutations modify server-side data. Best practices for structuring mutations:
                <br/><br/>1. <strong>Use input types</strong> — group arguments in a single <code>input</code> argument.
                <br/>2. <strong>Return the modified object</strong> — let the client update its local cache without a separate query.
                <br/>3. <strong>Return an error union or result type</strong> — return either the success data or typed error, enabling better client-side error handling.
                <br/>4. <strong>Name clearly</strong> — use verb + noun: <code>createUser</code>, <code>updatePost</code>, <code>deleteComment</code>.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">GraphQL</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code># Result type pattern (error union)
union CreateUserResult = User | ValidationError | DuplicateEmailError

type Mutation {
  createUser(input: CreateUserInput!): CreateUserResult!
}

# Client handles both success and error
mutation {
  createUser(input: { email: "a@b.com", name: "Alice" }) {
    ... on User            { id name email }
    ... on ValidationError { field message }
    ... on DuplicateEmailError { message suggestedEmail }
  }
}</code></pre>
              </div>`
          },
          {
            q:   'How do you organise a large GraphQL schema?',
            tag: 'hard',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> Large GraphQL schemas should be modularised — splitting types, queries, mutations, and resolvers into separate files by domain.
                <br/><br/><strong>Approaches:</strong>
                <br/>1. <strong>Schema stitching</strong> — merge multiple schema objects into one (older approach).
                <br/>2. <strong>SDL + resolvers per module</strong> — each domain (users, orders, products) exports its own typeDefs + resolvers; merge at server setup.
                <br/>3. <strong>Apollo Federation</strong> — each microservice exposes its own subgraph; a gateway composes them into a supergraph (best for microservices).
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">JavaScript</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code">// users/schema.js
export const typeDefs = gql\`
  type User { id: ID! name: String! }
  extend type Query { user(id: ID!): User }
\`;
export const resolvers = { Query: { user: (_, { id }, { db }) =&gt; db.users.find(id) } };

// server.js — merge all modules
import { mergeTypeDefs, mergeResolvers } from '@graphql-tools/merge';
const server = new ApolloServer({
  typeDefs:  mergeTypeDefs([userTypeDefs, orderTypeDefs]),
  resolvers: mergeResolvers([userResolvers, orderResolvers]),
});</code></pre>
              </div>`
          },
          {
            q:   'What are enum types in GraphQL?',
            tag: 'easy',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> An <strong>enum</strong> (enumeration) type restricts a field to a set of predefined, named values. Unlike scalars, enums are validated by GraphQL — passing an invalid value causes a validation error before the resolver is called.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">GraphQL</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>enum OrderStatus {
  PENDING
  PROCESSING
  SHIPPED
  DELIVERED
  CANCELLED
}

type Order {
  id:     ID!
  status: OrderStatus!    # only these 5 values are valid
}

type Query {
  ordersByStatus(status: OrderStatus!): [Order!]!
}</code></pre>
              </div>`
          }
        ]
      },
      // ════════════════════════════════════════
      //  DAY 19
      // ════════════════════════════════════════
      {
        id:     'day19',
        day:    19,
        title:  'GraphQL Advanced',
        topics: ['Batching', 'Performance Optimization', 'Security', 'DDoS & Injection Protection', 'Federated Schemas', 'Custom Directives', 'Serverless GraphQL', 'Real-time Subscriptions', 'Query Depth & Complexity', 'Schema Stitching', 'Persisted Queries'],
        questions: [
          {
            q:   'What is batching in GraphQL and what is its impact on performance?',
            tag: 'hard',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> <strong>Batching</strong> is the process of combining multiple individual resource loads into a single bulk operation — typically a single database query or API call. In GraphQL, DataLoader handles batching automatically at the resolver level.
                <br/><br/><strong>Impact on performance:</strong>
                <br/>• Reduces database round trips from N to 1 for related data (solves N+1).
                <br/>• Reduces network overhead when calling external APIs.
                <br/>• Reduces latency significantly for queries with deep nested relationships.
                <br/><br/><strong>Query batching</strong> (different from DataLoader batching): Some GraphQL clients (Apollo) can batch multiple operations into a single HTTP request: <code>[{ query: Q1 }, { query: Q2 }]</code> sent in one POST. The server processes them together. Requires the server to support array request bodies.
              </p>`
          },
          {
            q:   'How can you optimize GraphQL queries for performance with deeply nested data?',
            tag: 'hard',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong>
                <br/>1. <strong>DataLoader</strong> — batch and cache all individual resolver DB calls.
                <br/>2. <strong>Query depth limiting</strong> — reject queries deeper than a threshold (e.g., depth 7) to prevent exponential DB traversal.
                <br/>3. <strong>Query complexity analysis</strong> — assign a cost to each field; reject queries exceeding a total complexity budget.
                <br/>4. <strong>Persisted queries</strong> — clients register queries by hash; server executes the pre-validated version (no parsing/validation overhead per request).
                <br/>5. <strong>Field selection analysis</strong> — use <code>info.fieldNodes</code> in resolvers to only <code>JOIN</code> tables for fields the client actually requested.
                <br/>6. <strong>Caching</strong> — Redis cache for expensive resolver results with appropriate TTLs.
                <br/>7. <strong>N+1 profiling</strong> — use <code>apollo-tracing</code> or <code>opentelemetry</code> to find expensive resolvers.
              </p>`
          },
          {
            q:   'What are the security considerations when exposing a GraphQL API publicly?',
            tag: 'hard',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong>
                <br/>• <strong>Authentication &amp; authorization</strong> — verify JWT/session tokens; check permissions in every resolver.
                <br/>• <strong>Disable introspection in production</strong> — prevents attackers from mapping your entire API.
                <br/>• <strong>Query depth limiting</strong> — prevent deeply nested queries from causing exponential DB traversal.
                <br/>• <strong>Query complexity limiting</strong> — reject queries that are too expensive.
                <br/>• <strong>Rate limiting</strong> — limit requests per IP/user to prevent abuse.
                <br/>• <strong>Input validation and sanitization</strong> — validate all arguments; use parameterised queries for DB operations.
                <br/>• <strong>Field-level authorization</strong> — some fields should only be visible to admins.
                <br/>• <strong>Never expose stack traces</strong> — format errors to hide internal details.
                <br/>• <strong>CORS configuration</strong> — restrict allowed origins.
                <br/>• <strong>Persisted queries in production</strong> — only allow known pre-registered queries.
              </p>`
          },
          {
            q:   'How do you protect against SQL injection and DDoS attacks in a GraphQL API?',
            tag: 'hard',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong>
                <br/><br/><strong>SQL Injection prevention:</strong>
                <br/>• Use <strong>parameterised queries / prepared statements</strong> — never concatenate user input into SQL strings.
                <br/>• Use an ORM (Sequelize, TypeORM, Prisma) — they use parameterised queries internally.
                <br/>• Validate all input types with GraphQL's type system + additional validators.
                <br/>• Principle of least privilege — DB user should have minimal permissions.
                <br/><br/><strong>DDoS prevention:</strong>
                <br/>• <strong>Rate limiting</strong> — throttle by IP, user, or token (use libraries like graphql-rate-limit).
                <br/>• <strong>Query complexity analysis</strong> — reject overly expensive queries before execution.
                <br/>• <strong>Query depth limiting</strong> — block pathologically deep queries.
                <br/>• <strong>Timeouts</strong> — set resolver execution timeouts.
                <br/>• <strong>WAF (Web Application Firewall)</strong> — detect and block attack patterns at the network layer.
                <br/>• <strong>Persisted queries</strong> — only allow pre-registered queries; block arbitrary ones.
              </p>`
          },
          {
            q:   'What are the benefits and challenges of federated GraphQL schemas in a microservices architecture?',
            tag: 'hard',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> <strong>Apollo Federation</strong> allows multiple independent GraphQL services (subgraphs) to each own a part of the schema. A gateway composes them into a unified supergraph that clients query as a single API.
                <br/><br/><strong>Benefits:</strong>
                <br/>• <strong>Team autonomy</strong> — each team owns and deploys their subgraph independently.
                <br/>• <strong>Scalability</strong> — each subgraph scales independently.
                <br/>• <strong>Single API</strong> — clients see one unified schema.
                <br/>• <strong>Entity sharing</strong> — types like <code>User</code> can be extended across subgraphs.
                <br/><br/><strong>Challenges:</strong>
                <br/>• <strong>Schema consistency</strong> — breaking changes in one subgraph affect the composition.
                <br/>• <strong>Cross-service authorization</strong> — auth context must propagate correctly.
                <br/>• <strong>Distributed query planning</strong> — gateway must optimally plan which subgraphs to call.
                <br/>• <strong>Operational complexity</strong> — more moving parts to monitor and deploy.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">GraphQL</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code># Users subgraph — defines and owns User
type User @key(fields: "id") {
  id:   ID!
  name: String!
}

# Orders subgraph — extends User with order data
extend type User @key(fields: "id") {
  id:     ID! @external
  orders: [Order!]!
}</code></pre>
              </div>`
          },
          {
            q:   'How can you create custom directives in GraphQL and what are some use cases?',
            tag: 'hard',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> Custom directives are defined in the schema with <code>directive @name(args) on LOCATION</code>. The server-side implementation transforms schema fields or resolvers when the directive is present.
                <br/><br/><strong>Common use cases:</strong>
                <br/>• <code>@auth(role: "ADMIN")</code> — field-level authorization.
                <br/>• <code>@deprecated(reason: "...")</code> — built-in but a good model.
                <br/>• <code>@rateLimit(max: 10, window: "1m")</code> — per-field rate limiting.
                <br/>• <code>@cache(maxAge: 300)</code> — field-level caching TTL.
                <br/>• <code>@upper</code> — transform string response to uppercase.
                <br/>• <code>@validate(min: 0, max: 100)</code> — input validation.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">JavaScript</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code">// Schema definition
const typeDefs = gql\`
  directive @upper on FIELD_DEFINITION
  directive @auth(role: String!) on FIELD_DEFINITION

  type User {
    name:  String! @upper
    email: String!
    adminData: String @auth(role: "ADMIN")
  }
\`;

// Directive implementation (using @graphql-tools/schema)
class UpperDirective extends SchemaDirectiveVisitor {
  visitFieldDefinition(field) {
    const { resolve } = field;
    field.resolve = async (...args) =&gt; {
      const result = await resolve.apply(this, args);
      return typeof result === 'string' ? result.toUpperCase() : result;
    };
  }
}</code></pre>
              </div>`
          },
          {
            q:   'What is the role of serverless functions in a serverless GraphQL architecture?',
            tag: 'hard',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> In a <strong>serverless GraphQL architecture</strong>, the GraphQL server (including all resolvers) runs as a <strong>serverless function</strong> (AWS Lambda, Vercel Function, Cloudflare Worker) that spins up on demand instead of running a persistent server.
                <br/><br/><strong>Benefits:</strong>
                <br/>• <strong>Cost</strong> — pay only for actual invocations; idle time costs nothing.
                <br/>• <strong>Auto-scaling</strong> — platform scales to traffic automatically.
                <br/>• <strong>No server management</strong> — no patching, health checks, or scaling configuration.
                <br/><br/><strong>Challenges:</strong>
                <br/>• <strong>Cold starts</strong> — first invocation has latency (100ms–2s); mitigate with provisioned concurrency.
                <br/>• <strong>Stateless</strong> — no persistent connections; use RDS Proxy for DB connection pooling.
                <br/>• <strong>Subscriptions</strong> — WebSocket subscriptions are difficult; use managed pub/sub (AWS AppSync, Ably).
                <br/>• <strong>Execution time limits</strong> — Lambda has a 15-min max; long-running resolvers must be async.
              </p>`
          },
          {
            q:   'How do you implement real-time updates in GraphQL using subscriptions?',
            tag: 'hard',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> GraphQL subscriptions use a <strong>persistent WebSocket connection</strong>. When a mutation triggers an event, the server pushes data to all subscribed clients matching the event filter.
                <br/><br/><strong>Key components:</strong>
                <br/>1. <strong>Transport layer</strong> — WebSocket server (<code>graphql-ws</code> library, Apollo Server subscriptions).
                <br/>2. <strong>PubSub engine</strong> — in-memory for single server (<code>PubSub</code>); Redis for distributed/multi-pod.
                <br/>3. <strong>Subscription resolver</strong> — <code>subscribe</code> function returns an async iterator; <code>resolve</code> transforms the event payload.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">JavaScript</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>// Redis-based PubSub for distributed deployments
const { RedisPubSub } = require('graphql-redis-subscriptions');
const pubsub = new RedisPubSub({ connection: redisConfig });

const resolvers = {
  Mutation: {
    sendMessage: async (_, args, { pubsub, db }) =&gt; {
      const msg = await db.messages.create(args);
      await pubsub.publish('NEW_MESSAGE', { newMessage: msg });
      return msg;
    }
  },
  Subscription: {
    newMessage: {
      subscribe: withFilter(
        () =&gt; pubsub.asyncIterator('NEW_MESSAGE'),
        (payload, variables) =&gt; payload.newMessage.roomId === variables.roomId
      )
    }
  }
};</code></pre>
              </div>`
          },
          {
            q:   'What is query depth limiting in GraphQL?',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> <strong>Query depth limiting</strong> restricts how deeply a client can nest fields in a query. Without it, a malicious client could craft a query like <code>users { friends { friends { friends { ... } } } }</code> that triggers exponential database traversal and crashes the server.
                <br/><br/>Implement with the <code>graphql-depth-limit</code> library — add it as a validation rule before execution.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">JavaScript</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>import depthLimit from 'graphql-depth-limit';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  validationRules: [depthLimit(7)]  // reject queries deeper than 7 levels
});

// ❌ This query with depth 8+ would be rejected with a validation error
query {
  users {              // depth 1
    friends {          // depth 2
      friends {        // depth 3
        friends { ...  // depth 4+
        }
      }
    }
  }
}</code></pre>
              </div>`
          },
          {
            q:   'What is query complexity analysis in GraphQL?',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> <strong>Query complexity analysis</strong> assigns a "cost" to each field in a query and rejects the query if the total cost exceeds a configured maximum. This prevents resource-intensive queries without being too strict (simple deeply-nested queries might be cheap; flat queries with expensive resolvers can still be caught).
                <br/><br/>Use the <code>graphql-query-complexity</code> library. Assign higher costs to fields that do heavy DB work or return large lists.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">JavaScript</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code">import { createComplexityRule, simpleEstimator, fieldExtensionsEstimator } from 'graphql-query-complexity';

const complexityRule = createComplexityRule({
  maximumComplexity: 1000,
  estimators: [
    fieldExtensionsEstimator(),     // use schema-defined complexity hints
    simpleEstimator({ defaultComplexity: 1 }),
  ],
  onComplete: (complexity) =&gt; console.log('Query complexity:', complexity),
});

// Schema field with custom complexity
type Query {
  users(first: Int): [User!]!
    @complexity(value: 5, multipliers: ["first"])  # 5 * first value
}</code></pre>
              </div>`
          },
          {
            q:   'What is Apollo Federation and how does it work?',
            tag: 'hard',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> <strong>Apollo Federation</strong> is a specification and set of tools that allow multiple GraphQL servers (subgraphs) to collaborate to form a single unified API (supergraph) through a router/gateway.
                <br/><br/><strong>Key concepts:</strong>
                <br/>• <strong>Subgraph</strong> — individual GraphQL service (Users service, Orders service, etc.) with its own schema.
                <br/>• <strong>Entity</strong> — a type that can be shared and extended across subgraphs. Identified by <code>@key</code> directive.
                <br/>• <strong>Router/Gateway</strong> — receives client queries, plans execution across subgraphs, fetches data, and merges responses.
                <br/>• <strong>Reference Resolver</strong> — the <code>__resolveReference</code> function lets a subgraph resolve its own entity when requested by the gateway.
              </p>`
          },
          {
            q:   'What are persisted queries and why are they important?',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> <strong>Persisted Queries (APQ - Automatic Persisted Queries)</strong> is a protocol where GraphQL operation text is replaced by a hash. Instead of sending the full query string with every request, the client sends only the hash. If the server has the query cached by that hash, it executes it; otherwise it asks the client to send the full text once to register it.
                <br/><br/><strong>Benefits:</strong>
                <br/>• <strong>Reduced request size</strong> — small hash instead of full query text.
                <br/>• <strong>GET request enablement</strong> — with APQ, queries can use HTTP GET (hash in URL) → CDN caching becomes possible.
                <br/>• <strong>Security</strong> — in strict mode, only pre-registered queries are executed (no arbitrary queries from attackers).
              </p>`
          },
          {
            q:   'What is schema stitching vs Apollo Federation?',
            tag: 'hard',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong>
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Text</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>Aspect                Schema Stitching            Apollo Federation
------------------    -------------------------   ---------------------------
Architecture          Merge schemas in gateway    Each service owns its schema
Team ownership        Gateway team owns all       Each team owns their subgraph
Service coupling      Tight (gateway has schemas) Loose (contract-based)
Type extension        Manual in gateway           Native (@key, @extends)
Queries               Gateway rewrites queries    Query planning / composition
Use case              Legacy migration            Microservices (greenfield)
Maintenance           Heavy                       Lighter per team</code></pre>
              </div>`
          },
          {
            q:   'How does GraphQL handle file uploads?',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> File uploads are not part of the GraphQL spec — it was designed for structured JSON data. They can be handled via:
                <br/><br/>1. <strong><code>graphql-multipart-request-spec</code></strong> (most common) — uses a multipart form POST. The <code>graphql-upload</code> library provides an <code>Upload</code> scalar and middleware. Resolvers receive a <code>Promise&lt;FileUpload&gt;</code>.
                <br/>2. <strong>Separate REST endpoint</strong> — upload files via a REST/multipart endpoint, get back a URL, then pass the URL as a string argument to a GraphQL mutation (simpler, cleaner separation).
                <br/><br/><strong>Recommendation:</strong> For production systems, option 2 (separate upload endpoint + pass URL to GraphQL) is cleaner and avoids memory issues with large files in the GraphQL server.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">GraphQL</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code">scalar Upload

type Mutation {
  uploadAvatar(file: Upload!): String!  # returns the uploaded file URL
}</code></pre>
              </div>`
          },
          {
            q:   'What is schema-first vs code-first GraphQL development?',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong>
                <br/><br/>• <strong>Schema-first</strong> — write the schema SDL (<code>.graphql</code> file) first, then implement resolvers to match. Schema is the single source of truth; great for team API design discussions and code generation.
                <br/>• <strong>Code-first</strong> — write resolvers and types in code (e.g., TypeScript with NestJS GraphQL, Pothos, TypeGraphQL); the schema SDL is auto-generated from the code.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Text</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>Approach         Schema-first                Code-first
-----------      ----------------------      -------------------------
Workflow         SDL → Resolvers             Code → Generated SDL
Source of truth  .graphql SDL files          TypeScript/Java code
Team process     API design review first     Dev-driven schema
Type safety      Manual sync                 Auto-generated types
Frameworks       Apollo Server, gqlgen       NestJS, TypeGraphQL, Pothos
Best for         API-design-heavy teams      Backend-first teams</code></pre>
              </div>`
          }
        ]
      },
      // ════════════════════════════════════════
      //  DAY 20
      // ════════════════════════════════════════
      {
        id:     'day20',
        day:    20,
        title:  'Full-Stack Capstone: React + GraphQL + Java',
        topics: ['Apollo Client', 'useQuery / useMutation', 'Apollo Cache', 'Spring for GraphQL', 'Real-time Integration', 'REST vs GraphQL Trade-offs', 'Optimistic UI', 'Production Debugging', 'Migration Strategy', 'Best Practices'],
        questions: [
          {
            q:   'How do you connect a React app to a GraphQL API with Apollo Client?',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> Apollo Client is the most popular GraphQL client for React. Setup involves creating an <code>ApolloClient</code> instance with the API URL and cache, then wrapping the app in <code>ApolloProvider</code>.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">JSX</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code">import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({ uri: 'https://api.example.com/graphql' });

// Add JWT auth header to every request
const authLink = setContext((_, { headers }) =&gt; ({
  headers: { ...headers, authorization: \`Bearer \${getToken()}\` }
}));

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

// Wrap app
root.render(
  &lt;ApolloProvider client={client}&gt;
    &lt;App /&gt;
  &lt;/ApolloProvider&gt;
);</code></pre>
              </div>`
          },
          {
            q:   'What is <code>useQuery</code> and <code>useMutation</code> in Apollo Client?',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong>
                <br/>• <code>useQuery(QUERY, options)</code> — executes a query when the component mounts (and re-executes when variables change). Returns <code>{ data, loading, error, refetch }</code>.
                <br/>• <code>useMutation(MUTATION, options)</code> — returns a tuple <code>[mutateFn, { data, loading, error }]</code>. The mutation runs when you call <code>mutateFn({ variables })</code>.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">JSX</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code">const GET_USERS = gql\`query { users { id name email } }\`;

function UserList() {
  const { data, loading, error } = useQuery(GET_USERS);
  if (loading) return &lt;Spinner /&gt;;
  if (error)   return &lt;Error message={error.message} /&gt;;
  return &lt;ul&gt;{data.users.map(u =&gt; &lt;li key={u.id}&gt;{u.name}&lt;/li&gt;)}&lt;/ul&gt;;
}

const DELETE_USER = gql\`mutation Delete($id: ID!) { deleteUser(id: $id) }\`;

function UserRow({ user }) {
  const [deleteUser, { loading }] = useMutation(DELETE_USER, {
    refetchQueries: [{ query: GET_USERS }],   // refresh list after delete
  });
  return &lt;button onClick={() =&gt; deleteUser({ variables: { id: user.id } })}&gt;Delete&lt;/button&gt;;
}</code></pre>
              </div>`
          },
          {
            q:   'How does Apollo Client\'s normalised cache work?',
            tag: 'hard',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> Apollo Client's <code>InMemoryCache</code> stores query results in a <strong>normalised</strong> flat store — each object is stored by its <strong>cache key</strong> (<code>__typename:id</code>, e.g., <code>User:42</code>). When multiple queries return the same object, they share the same cache entry.
                <br/><br/><strong>Benefits:</strong>
                <br/>• <strong>Automatic cache updates</strong> — if a mutation returns a User with the same ID, all components displaying that user automatically re-render with the new data.
                <br/>• <strong>Deduplication</strong> — the same object is stored once regardless of how many queries fetched it.
                <br/><br/><strong>Manual cache updates</strong> — for mutations that don't return the updated object (e.g., delete), manually update the cache or call <code>refetchQueries</code>.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">JSX</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code">// Manual cache update after delete
const [deletePost] = useMutation(DELETE_POST, {
  update(cache, { data: { deletePost } }) {
    cache.modify({
      fields: {
        posts(existingRefs, { readField }) {
          return existingRefs.filter(ref =&gt; readField('id', ref) !== deletePost.id);
        }
      }
    });
  }
});</code></pre>
              </div>`
          },
          {
            q:   'How do you handle authentication in a React + GraphQL full-stack application?',
            tag: 'hard',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong>
                <br/><br/><strong>1. Login:</strong>
                <br/>Call a login mutation → server validates credentials → returns a JWT access token (+ refresh token).
                <br/><br/><strong>2. Token storage:</strong>
                <br/>• Store short-lived access token in memory (React state) — most secure.
                <br/>• Store refresh token in <code>httpOnly</code> cookie (inaccessible to JS — prevents XSS theft).
                <br/><br/><strong>3. Apollo Client adds token to requests:</strong>
                <br/>Use <code>authLink</code> middleware to inject <code>Authorization: Bearer &lt;token&gt;</code> on every GraphQL request.
                <br/><br/><strong>4. Token refresh:</strong>
                <br/>When a request fails with <code>UNAUTHENTICATED</code>, use Apollo Link error handler to call the refresh token endpoint and retry the request.
                <br/><br/><strong>5. Server validates token in context factory</strong> — attaches user to context, checked in resolvers.
              </p>`
          },
          {
            q:   'How do you architect a Spring Boot + GraphQL backend?',
            tag: 'hard',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> Use <strong>Spring for GraphQL</strong> (<code>spring-boot-starter-graphql</code>, GA since Spring Boot 2.7 / Spring 6). It integrates with Spring MVC or WebFlux and uses the <strong>schema-first</strong> approach.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>// 1. Schema: src/main/resources/graphql/schema.graphqls
// type Query { user(id: ID!): User }
// type User { id: ID!; name: String!; email: String! }

// 2. Controller — annotate with @QueryMapping, @MutationMapping
@Controller
public class UserController {

    @Autowired
    private UserService userService;

    @QueryMapping
    public User user(@Argument String id) {
        return userService.findById(id);
    }

    @MutationMapping
    public User createUser(@Argument String name, @Argument String email) {
        return userService.create(name, email);
    }

    @SchemaMapping(typeName = "User")
    public List&lt;Post&gt; posts(User user) {   // resolver for User.posts field
        return userService.getPostsByUserId(user.getId());
    }
}</code></pre>
              </div>`
          },
          {
            q:   'What is Spring for GraphQL and how does it differ from graphql-java?',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong>
                <br/>• <strong>graphql-java</strong> — the low-level GraphQL implementation library for Java. You configure type wiring, data fetchers, and execution manually. Maximum control, more boilerplate.
                <br/>• <strong>Spring for GraphQL</strong> (spring-graphql) — Spring Boot integration built on top of graphql-java. Provides:
                  <br/>&nbsp;&nbsp;— Auto-loads <code>.graphqls</code> schema files from classpath.
                  <br/>&nbsp;&nbsp;— <code>@QueryMapping</code>, <code>@MutationMapping</code>, <code>@SubscriptionMapping</code> annotations.
                  <br/>&nbsp;&nbsp;— <code>@SchemaMapping</code> for field resolvers.
                  <br/>&nbsp;&nbsp;— Integration with Spring Security, Actuator, testing utilities.
                  <br/>&nbsp;&nbsp;— GraphiQL UI at <code>/graphiql</code> in dev mode.
                <br/><br/>Use Spring for GraphQL for new Spring Boot projects; use graphql-java directly only when fine-grained control is essential.
              </p>`
          },
          {
            q:   'How do you implement real-time updates in a React app using GraphQL subscriptions with Apollo?',
            tag: 'hard',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> Configure Apollo Client with a WebSocket link for subscriptions alongside the HTTP link for queries/mutations. Use <code>useSubscription</code> hook in the component.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">JSX</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code">import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { createClient } from 'graphql-ws';
import { split, HttpLink } from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';

const wsLink  = new GraphQLWsLink(createClient({ url: 'wss://api.example.com/graphql' }));
const httpLink = new HttpLink({ uri: 'https://api.example.com/graphql' });

// Route: subscriptions → WebSocket; queries/mutations → HTTP
const splitLink = split(
  ({ query }) =&gt; {
    const { kind, operation } = getMainDefinition(query);
    return kind === 'OperationDefinition' &amp;&amp; operation === 'subscription';
  },
  wsLink, httpLink
);

const client = new ApolloClient({ link: splitLink, cache: new InMemoryCache() });

// Component
const NEW_MESSAGE = gql\`subscription { newMessage { text author } }\`;

function LiveChat() {
  const { data } = useSubscription(NEW_MESSAGE);
  return &lt;div&gt;{data?.newMessage?.text}&lt;/div&gt;;
}</code></pre>
              </div>`
          },
          {
            q:   'What are the trade-offs between REST and GraphQL for a microservices architecture?',
            tag: 'hard',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong>
                <br/><br/><strong>GraphQL advantages in microservices:</strong>
                <br/>• Single API gateway that aggregates multiple services — no multiple round-trips from the frontend.
                <br/>• BFF (Backend for Frontend) pattern — each client gets exactly the data it needs from one endpoint.
                <br/>• Schema evolution without versioning.
                <br/><br/><strong>REST advantages in microservices:</strong>
                <br/>• <strong>HTTP caching</strong> — CDN, browser, and proxy caching work naturally.
                <br/>• <strong>Simpler tooling</strong> — Postman, curl, browser URL bar all work.
                <br/>• <strong>Established patterns</strong> — well-understood error codes, idempotency.
                <br/>• <strong>Better for large file ops</strong> — file uploads, streaming.
                <br/><br/><strong>Hybrid approach</strong> (common in practice): Internal service-to-service communication uses REST/gRPC; the API gateway exposes GraphQL to frontend clients.
              </p>`
          },
          {
            q:   'What is optimistic UI and how do you implement it with Apollo Client?',
            tag: 'hard',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> <strong>Optimistic UI</strong> immediately updates the UI with the expected result of a mutation <em>before</em> the server confirms it — making the app feel instant. If the server returns an error, the optimistic update is rolled back automatically.
                <br/><br/>In Apollo Client, pass an <code>optimisticResponse</code> option to <code>useMutation</code>. Apollo writes this to the cache immediately, then replaces it with the real server response.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">JSX</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code">const [likePost] = useMutation(LIKE_POST, {
  optimisticResponse: {
    likePost: {
      __typename: 'Post',
      id: post.id,
      likesCount: post.likesCount + 1,  // assume success
      likedByMe: true,
    }
  }
  // Apollo updates cache immediately; rolls back on server error
});</code></pre>
              </div>`
          },
          {
            q:   'How do you test a React component that fetches data from a GraphQL API?',
            tag: 'hard',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> Use Apollo's <code>MockedProvider</code> to intercept GraphQL operations in tests. Provide mock responses for each query/mutation the component makes.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">JSX</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code">import { MockedProvider } from '@apollo/client/testing';

const mocks = [{
  request: { query: GET_USER, variables: { id: '1' } },
  result:  { data: { user: { id: '1', name: 'Alice', email: 'a@test.com' } } }
}];

test('renders user name after loading', async () =&gt; {
  render(
    &lt;MockedProvider mocks={mocks} addTypename={false}&gt;
      &lt;UserProfile userId="1" /&gt;
    &lt;/MockedProvider&gt;
  );

  expect(screen.getByRole('progressbar')).toBeInTheDocument(); // loading
  expect(await screen.findByText('Alice')).toBeInTheDocument();  // success
});

test('handles error state', async () =&gt; {
  const errorMock = [{ request: { query: GET_USER, variables: { id: '1' } },
    error: new Error('Network error') }];
  render(&lt;MockedProvider mocks={errorMock}&gt;&lt;UserProfile userId="1" /&gt;&lt;/MockedProvider&gt;);
  expect(await screen.findByText(/something went wrong/i)).toBeInTheDocument();
});</code></pre>
              </div>`
          },
          {
            q:   'How would you migrate a REST API to GraphQL in a Spring Boot application?',
            tag: 'hard',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> A safe, incremental migration strategy:
                <br/><br/>1. <strong>Add GraphQL alongside REST</strong> — don't remove REST endpoints immediately. Run both in parallel.
                <br/>2. <strong>Use existing services</strong> — GraphQL resolvers call the same service layer methods as REST controllers. No business logic duplication.
                <br/>3. <strong>Start with queries</strong> — migrate read operations first; mutations later.
                <br/>4. <strong>Migrate clients gradually</strong> — update frontend/mobile clients to use GraphQL one endpoint at a time.
                <br/>5. <strong>Deprecate REST endpoints</strong> — once GraphQL coverage is complete and clients have migrated.
                <br/>6. <strong>Remove REST</strong> — only after all consumers have switched.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>// Existing REST controller — keep it
@RestController
class UserRestController {
    @GetMapping("/api/users/{id}")
    User getUser(@PathVariable String id) { return userService.findById(id); }
}

// New GraphQL controller — same service, new interface
@Controller
class UserGraphQLController {
    @QueryMapping
    User user(@Argument String id) { return userService.findById(id); }
}</code></pre>
              </div>`
          },
          {
            q:   'Describe the debugging process for a production issue in a React + GraphQL + Java app.',
            tag: 'hard',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> Systematic layer-by-layer approach (similar to WAR room in Java section):
                <br/><br/>1. <strong>Identify the symptom</strong> — user report, alert, or Sentry error. What operation fails? Which user/environment?
                <br/>2. <strong>Check frontend (React)</strong>
                  <br/>&nbsp;&nbsp;— Browser console: JavaScript errors, network errors.
                  <br/>&nbsp;&nbsp;— Apollo DevTools: inspect cache, failed queries, error responses.
                  <br/>&nbsp;&nbsp;— Network tab: what request was sent? What response came back?
                <br/>3. <strong>Check GraphQL layer</strong>
                  <br/>&nbsp;&nbsp;— Apollo Studio / GraphQL Playground: reproduce the query manually.
                  <br/>&nbsp;&nbsp;— Check the <code>errors</code> array in the response.
                  <br/>&nbsp;&nbsp;— Check trace/span data for which resolver failed.
                <br/>4. <strong>Check Java/Spring Boot backend</strong>
                  <br/>&nbsp;&nbsp;— Application logs (Kibana/Splunk): find the request by correlation ID / trace ID.
                  <br/>&nbsp;&nbsp;— Look for exceptions, slow queries, DB errors.
                  <br/>&nbsp;&nbsp;— Actuator /health, /metrics.
                <br/>5. <strong>Fix → Deploy → Validate → Post-mortem</strong>.
              </p>`
          },
          {
            q:   'What are best practices for a production React + GraphQL + Java Spring Boot application?',
            tag: 'hard',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong>
                <br/><br/><strong>React Frontend:</strong>
                <br/>• Lazy load routes and heavy components.
                <br/>• Use React Query or Apollo Client for data fetching (no manual useEffect + fetch).
                <br/>• Implement Error Boundaries for graceful degradation.
                <br/>• CSP headers, sanitize user input, avoid dangerouslySetInnerHTML.
                <br/><br/><strong>GraphQL Layer:</strong>
                <br/>• Enable query depth + complexity limits.
                <br/>• Use DataLoader for all resolver DB calls.
                <br/>• Disable introspection in production.
                <br/>• Use persisted queries to prevent arbitrary query abuse.
                <br/>• Mask internal errors in responses.
                <br/><br/><strong>Java Spring Boot:</strong>
                <br/>• Use constructor injection, avoid field injection.
                <br/>• @Transactional only on service methods.
                <br/>• Use Flyway/Liquibase for DB migrations.
                <br/>• Expose only health and metrics actuator endpoints in production.
                <br/><br/><strong>Cross-cutting:</strong>
                <br/>• Distributed tracing with OpenTelemetry (trace ID from React → GraphQL → Java → DB).
                <br/>• Centralised structured logging (JSON logs, correlation IDs).
                <br/>• CI/CD pipeline with automated tests, security scans (Sonar, OWASP), Docker build, K8s deploy.
              </p>`
          },
          {
            q:   'What are the key differences between Apollo Client, React Query + fetch, and SWR for a GraphQL backend?',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong>
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Text</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>Aspect            Apollo Client              React Query + fetch/gql      SWR + fetch/gql
-----------       ----------------------     --------------------------   ----------------------
GraphQL aware?    Yes (native)               No (generic)                 No (generic)
Cache type        Normalised by type+id      Query-key based              Query-key based
Optimistic UI     Built-in                   Manual                       Manual
Subscriptions     Built-in (WS link)         Manual                       Manual
Bundle size       ~47 KB                     ~13 KB                       ~4 KB
Best for          Full Apollo stack          React Query users, REST+GQL  Lightweight SWR fans
Mutation cache    Auto-normalised             Manual invalidation          Manual invalidation
DevTools          Apollo DevTools             React Query DevTools         None official</code></pre>
              </div>
              <p class="accordion-answer">
                <strong>Recommendation:</strong> Use <strong>Apollo Client</strong> when your team is already on the Apollo ecosystem (Apollo Server, Federation). Use <strong>React Query</strong> when mixing REST + GraphQL or wanting a smaller, more flexible cache. <strong>SWR</strong> for extremely lightweight apps that only need basic stale-while-revalidate caching.
              </p>`
          },
          {
            q:   'How do you implement infinite scroll / pagination in React with GraphQL?',
            tag: 'hard',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> Use Apollo Client's <code>fetchMore</code> with a cursor-based connection, combined with an Intersection Observer to trigger loading when the user scrolls to the bottom.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">JSX</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code">const { data, fetchMore, loading } = useQuery(GET_POSTS, {
  variables: { first: 10 }
});

const loadMore = () =&gt; {
  fetchMore({
    variables: { after: data.posts.pageInfo.endCursor },
    updateQuery: (prev, { fetchMoreResult }) =&gt; ({
      posts: {
        ...fetchMoreResult.posts,
        edges: [...prev.posts.edges, ...fetchMoreResult.posts.edges]
      }
    })
  });
};

// Trigger loadMore when last item enters viewport
const lastItemRef = useRef(null);
useEffect(() =&gt; {
  const observer = new IntersectionObserver(([entry]) =&gt; {
    if (entry.isIntersecting &amp;&amp; data?.posts.pageInfo.hasNextPage) loadMore();
  });
  if (lastItemRef.current) observer.observe(lastItemRef.current);
  return () =&gt; observer.disconnect();
});</code></pre>
              </div>`
          }
        ]
      },

      // ════════════════════════════════════════
      //  DAY 21 — APACHE KAFKA
      // ════════════════════════════════════════
      {
        id:     'day21',
        day:    21,
        title:  'Apache Kafka',
        topics: ['ISR & Replicas', 'Message Transfer', 'Components', 'Core APIs', 'Partitions', 'Zookeeper', 'Leader & Follower', 'Topic Replication', 'Consumer Groups', 'Message Size', 'Features', 'Geo-Replication', 'Schema Registry', 'Clusters', 'Partitioning Key'],
        questions: [
          {
            q:   'What does it mean if a replica is not an In-Sync Replica (ISR) for a long time?',
            tag: 'hard',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> A replica that falls out of the <strong>ISR (In-Sync Replica)</strong> set for a prolonged period indicates it is <strong>lagging behind the leader</strong> and unable to keep up with the write rate. This can happen due to:
                <br/><br/>• <strong>Network issues</strong> — slow or intermittent connectivity between the broker and the leader.
                <br/>• <strong>Broker overload</strong> — the broker is CPU/IO-bound and cannot process replication fast enough.
                <br/>• <strong>Disk I/O bottleneck</strong> — slow disk causing the follower to fall behind.
                <br/>• <strong>GC pauses</strong> — long JVM garbage collection pauses on the broker.
                <br/><br/><strong>Consequences:</strong>
                <br/>• The lagging replica is removed from the ISR list. The leader will no longer wait for it before acknowledging writes (when <code>acks=all</code>).
                <br/>• If the leader fails and the only available replica is out of ISR, you face a trade-off: elect the out-of-sync replica (potential data loss) or wait (availability issue). Controlled by <code>unclean.leader.election.enable</code>.
                <br/><br/><strong>Configured by:</strong> <code>replica.lag.time.max.ms</code> — if a replica hasn't fetched from the leader within this window, it is removed from ISR.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Shell</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code># Check ISR status
kafka-topics.sh --describe --topic my-topic --bootstrap-server localhost:9092

# Output
Topic: my-topic  Partition: 0  Leader: 1  Replicas: 1,2,3  Isr: 1,2
# Replica 3 is NOT in ISR — it has fallen behind</code></pre>
              </div>`
          },
          {
            q:   'What are the traditional methods of message transfer? How is Kafka better than them?',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong>
                <br/><br/><strong>Traditional methods:</strong>
                <br/>1. <strong>Point-to-Point (Message Queues)</strong> — e.g., ActiveMQ, RabbitMQ. One producer sends a message to a queue; one consumer reads it. Message is deleted after consumption. Tight coupling; doesn't scale well for many consumers.
                <br/>2. <strong>Publish-Subscribe (Pub/Sub)</strong> — one producer broadcasts to many subscribers. But messages are typically not persisted once delivered; subscribers must be online.
                <br/>3. <strong>File-based transfer / FTP</strong> — batch processing; high latency, not real-time.
                <br/>4. <strong>Database as a message bus</strong> — polling tables; inefficient, doesn't scale.
                <br/><br/><strong>How Kafka is better:</strong>
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Text</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>Feature          Traditional MQ          Apache Kafka
-----------      --------------------    ----------------------------
Durability       Message deleted on ack  Messages persisted on disk
Replay           Not possible            Yes — replay from any offset
Throughput       Moderate                Millions of msgs/sec
Scalability      Vertical                Horizontal (partitions)
Consumers        Single or limited       Multiple consumer groups
Ordering         Per-queue               Per-partition guarantee
Retention        Until consumed          Configurable (days/weeks)
Coupling         Tight                   Loose (decoupled)</code></pre>
              </div>`
          },
          {
            q:   'What are the major components of Kafka?',
            tag: 'easy',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> Kafka's architecture consists of five major components:
                <br/><br/>1. <strong>Producer</strong> — application that publishes (writes) messages to Kafka topics.
                <br/>2. <strong>Consumer</strong> — application that subscribes to (reads) messages from Kafka topics. Tracks progress via offsets.
                <br/>3. <strong>Broker</strong> — a Kafka server that stores messages. A Kafka cluster is a group of brokers. Each broker handles a set of topic partitions.
                <br/>4. <strong>Topic</strong> — a named category/feed to which records are published. Topics are split into partitions for scalability.
                <br/>5. <strong>ZooKeeper / KRaft</strong> — coordination service that manages broker metadata, leader election, and cluster state. (KRaft replaces ZooKeeper from Kafka 3.3+.)
                <br/><br/>Additional components:
                <br/>• <strong>Partition</strong> — ordered, immutable sequence of records within a topic.
                <br/>• <strong>Offset</strong> — unique sequential ID of a record within a partition.
                <br/>• <strong>Consumer Group</strong> — group of consumers sharing work across partitions.
                <br/>• <strong>Schema Registry</strong> — stores and enforces message schemas (Avro/JSON/Protobuf).
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Text</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>Producer ──▶ [Topic: orders]
               ├── Partition 0: [msg0][msg1][msg2]  ← Broker 1 (Leader)
               ├── Partition 1: [msg0][msg1]         ← Broker 2 (Leader)
               └── Partition 2: [msg0]               ← Broker 3 (Leader)
                         ▲
              Consumer Group A reads all partitions</code></pre>
              </div>`
          },
          {
            q:   'Explain the four core API architecture that Kafka uses.',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> Kafka provides four core APIs:
                <br/><br/>1. <strong>Producer API</strong> — allows applications to publish (send) streams of records to one or more Kafka topics. Supports sync and async sends, partitioning strategies, and compression.
                <br/><br/>2. <strong>Consumer API</strong> — allows applications to subscribe to topics and process the stream of records. Consumers maintain offsets to track their read position. Supports consumer groups for load balancing.
                <br/><br/>3. <strong>Streams API (Kafka Streams)</strong> — a client library for building real-time stream processing applications. Reads from input topics, transforms/aggregates data, and writes to output topics. Stateful processing with state stores.
                <br/><br/>4. <strong>Connector API (Kafka Connect)</strong> — a framework for building reusable connectors to integrate Kafka with external systems (databases, HDFS, S3, Elasticsearch). Source connectors import data into Kafka; Sink connectors export data from Kafka.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Text</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>External DB ──[Source Connector]──▶ Kafka ──[Sink Connector]──▶ Elasticsearch
                                      │
                               [Streams API]  ◀── transform/aggregate
                                      │
                          Producers ──┤── Consumers
                       (Producer API)     (Consumer API)</code></pre>
              </div>`
          },
          {
            q:   'What do you mean by a Partition in Kafka?',
            tag: 'easy',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> A <strong>partition</strong> is the fundamental unit of parallelism and ordering in Kafka. Each topic is split into one or more partitions.
                <br/><br/><strong>Key characteristics:</strong>
                <br/>• <strong>Ordered log</strong> — messages within a partition are strictly ordered and assigned a sequential <strong>offset</strong> (0, 1, 2, …). Ordering is only guaranteed within a partition, not across partitions.
                <br/>• <strong>Immutable</strong> — messages are appended only; never modified or deleted (retention policy deletes based on time or size).
                <br/>• <strong>Scalability</strong> — more partitions = more parallelism. Consumers in a group are assigned different partitions.
                <br/>• <strong>Replication</strong> — each partition has one leader and N-1 follower replicas across brokers for fault tolerance.
                <br/><br/><strong>Choosing partition count:</strong> More partitions = higher throughput but more file handles and leader election overhead. Rule of thumb: partition count ≥ max consumer parallelism needed.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Shell</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code># Create topic with 3 partitions and replication factor 3
kafka-topics.sh --create \
  --topic orders \
  --partitions 3 \
  --replication-factor 3 \
  --bootstrap-server localhost:9092</code></pre>
              </div>`
          },
          {
            q:   'What do you mean by ZooKeeper in Kafka and what are its uses?',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> <strong>Apache ZooKeeper</strong> is a distributed coordination service that Kafka (traditionally) uses for cluster management. It is a separate cluster that Kafka brokers connect to.
                <br/><br/><strong>Uses of ZooKeeper in Kafka:</strong>
                <br/>1. <strong>Broker registration</strong> — each broker registers itself in ZooKeeper when it starts. Other brokers and clients discover the cluster this way.
                <br/>2. <strong>Leader election</strong> — when a partition leader fails, ZooKeeper coordinates electing a new leader from the ISR.
                <br/>3. <strong>Topic metadata</strong> — stores partition assignments, replication factor, and configuration.
                <br/>4. <strong>Consumer offset storage</strong> — (legacy) older Kafka versions stored consumer offsets in ZooKeeper. Modern Kafka stores them in the <code>__consumer_offsets</code> internal topic.
                <br/>5. <strong>Access Control Lists (ACLs)</strong> — authorization rules stored in ZooKeeper.
                <br/><br/><strong>Note:</strong> From Kafka 3.3+, ZooKeeper is deprecated in favour of <strong>KRaft mode</strong> — Kafka's built-in Raft consensus implementation.
              </p>`
          },
          {
            q:   'Can we use Kafka without ZooKeeper?',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> <strong>Yes, from Kafka 2.8+ (early access) and production-ready from Kafka 3.3+</strong> using <strong>KRaft mode</strong> (Kafka Raft metadata mode).
                <br/><br/><strong>What is KRaft?</strong>
                <br/>KRaft replaces ZooKeeper with Kafka's own Raft-based consensus protocol. Cluster metadata (broker registry, topic assignments, leader elections) is now stored in a special internal Kafka topic managed by a quorum of <strong>controller brokers</strong>.
                <br/><br/><strong>Benefits of KRaft over ZooKeeper:</strong>
                <br/>• <strong>Simpler operations</strong> — no separate ZooKeeper cluster to manage, monitor, or secure.
                <br/>• <strong>Faster recovery</strong> — fewer round-trips; partition leader election is faster.
                <br/>• <strong>Better scalability</strong> — supports millions of partitions (ZooKeeper had limits).
                <br/>• <strong>Unified security model</strong> — single system to configure.
                <br/><br/>ZooKeeper support is planned to be <strong>fully removed in Kafka 4.0</strong>.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Shell</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code># Start Kafka in KRaft mode (no ZooKeeper needed)
# Generate a cluster ID
KAFKA_CLUSTER_ID="$(bin/kafka-storage.sh random-uuid)"

# Format log directory
bin/kafka-storage.sh format -t $KAFKA_CLUSTER_ID -c config/kraft/server.properties

# Start KRaft server
bin/kafka-server-start.sh config/kraft/server.properties</code></pre>
              </div>`
          },
          {
            q:   'Explain the concept of Leader and Follower in Kafka.',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> Every partition in Kafka has exactly one <strong>Leader</strong> and zero or more <strong>Followers</strong> (replicas).
                <br/><br/><strong>Leader:</strong>
                <br/>• Handles ALL read and write requests for the partition.
                <br/>• Producers always write to the leader.
                <br/>• Consumers (by default) read from the leader.
                <br/>• There is one leader per partition per broker.
                <br/><br/><strong>Follower:</strong>
                <br/>• Passively replicates all messages from the leader.
                <br/>• Does not serve client requests (unless <code>replica.fetch.min.bytes</code> / follower fetching is configured — available in newer versions for read scaling).
                <br/>• Stays in ISR by continuously fetching from the leader.
                <br/>• Promoted to leader if the current leader fails and the follower is in ISR.
                <br/><br/><strong>Load balancing:</strong> Leadership is spread across brokers automatically. For a 3-broker cluster with 3 partitions, ideally each broker leads one partition.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Text</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>Broker 1: Leader(P0),   Follower(P1), Follower(P2)
Broker 2: Follower(P0), Leader(P1),  Follower(P2)
Broker 3: Follower(P0), Follower(P1), Leader(P2)

Producer writes to P0 → goes to Broker 1 (Leader)
Followers on Broker 2 & 3 pull and replicate P0</code></pre>
              </div>`
          },
          {
            q:   'Why is Topic Replication important in Kafka? What do you mean by ISR in Kafka?',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong>
                <br/><br/><strong>Why Topic Replication is important:</strong>
                <br/>• <strong>Fault tolerance</strong> — if a broker goes down, partitions on that broker are automatically served by replicas on other brokers.
                <br/>• <strong>Durability</strong> — data is not lost even if a broker fails (as long as replication factor &gt; 1 and enough replicas survive).
                <br/>• <strong>High availability</strong> — leader election from replicas ensures producers/consumers can continue without intervention.
                <br/>• Configured with <code>replication.factor</code> per topic. Recommended: 3 for production.
                <br/><br/><strong>ISR (In-Sync Replica):</strong>
                <br/>ISR is the set of replicas that are fully caught up with the leader. A replica stays in ISR if it has fetched all messages from the leader within the <code>replica.lag.time.max.ms</code> window (default 30s).
                <br/><br/>When <code>acks=all</code>, the producer waits for all ISR members to acknowledge the write — ensuring the strongest durability guarantee.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Properties</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code># Producer config — strongest durability
acks=all                       # wait for all ISR to ack
min.insync.replicas=2          # require at least 2 ISR to be in-sync
enable.idempotence=true        # exactly-once semantics</code></pre>
              </div>`
          },
          {
            q:   'What do you understand about a consumer group in Kafka?',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> A <strong>consumer group</strong> is a set of consumers that cooperate to consume messages from a topic. Each partition in the topic is assigned to exactly one consumer in the group at a time, enabling parallel processing.
                <br/><br/><strong>Key rules:</strong>
                <br/>• Each message is delivered to <strong>exactly one consumer</strong> within a group (like a queue).
                <br/>• Multiple independent groups can each read the full topic independently (like pub/sub).
                <br/>• If consumers &gt; partitions, some consumers are idle.
                <br/>• If partitions &gt; consumers, some consumers handle multiple partitions.
                <br/>• <strong>Rebalancing</strong> — when a consumer joins or leaves, partitions are redistributed automatically.
                <br/><br/>Consumer groups are identified by a <code>group.id</code>. Offsets are committed per group per partition to the <code>__consumer_offsets</code> internal topic.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Text</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>Topic: orders (3 partitions: P0, P1, P2)

Group A (3 consumers):          Group B (1 consumer):
  Consumer1 → P0                  Consumer reads P0, P1, P2
  Consumer2 → P1
  Consumer3 → P2

Both groups get all messages independently</code></pre>
              </div>`
          },
          {
            q:   'What is the maximum size of a message that Kafka can receive?',
            tag: 'easy',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> By default, the maximum message size in Kafka is <strong>1 MB (1,048,576 bytes)</strong>, controlled by the broker config <code>message.max.bytes</code>.
                <br/><br/><strong>Relevant configs (all must be aligned):</strong>
                <br/>• <code>message.max.bytes</code> (broker) — max size of a message batch. Default: 1 MB.
                <br/>• <code>max.request.size</code> (producer) — max size of a single produce request. Default: 1 MB.
                <br/>• <code>fetch.message.max.bytes</code> / <code>max.partition.fetch.bytes</code> (consumer) — max data fetched per partition per request. Default: 1 MB.
                <br/>• <code>replica.fetch.max.bytes</code> (broker) — max data replicated per request. Must be ≥ <code>message.max.bytes</code>.
                <br/><br/><strong>For large messages:</strong> Increase these configs consistently. Better practice: store large payloads in S3/Blob storage and send only the reference URL through Kafka — keeps Kafka fast.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Properties</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code># server.properties — allow up to 10 MB messages
message.max.bytes=10485760
replica.fetch.max.bytes=10485760

# producer config
max.request.size=10485760

# consumer config
max.partition.fetch.bytes=10485760</code></pre>
              </div>`
          },
          {
            q:   'What are some of the key features of Kafka?',
            tag: 'easy',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> Apache Kafka's key features:
                <br/><br/>• <strong>High Throughput</strong> — handles millions of messages per second through sequential disk I/O, batching, and compression.
                <br/>• <strong>Scalability</strong> — horizontally scalable by adding brokers and partitions. No downtime for scaling.
                <br/>• <strong>Durability &amp; Persistence</strong> — messages written to disk, replicated across brokers. Configurable retention (time/size).
                <br/>• <strong>Fault Tolerance</strong> — replication ensures no data loss even if brokers fail.
                <br/>• <strong>Low Latency</strong> — sub-millisecond message delivery for real-time systems.
                <br/>• <strong>Message Replay</strong> — consumers can re-read messages by resetting offsets. Unlike traditional queues.
                <br/>• <strong>Exactly-Once Semantics (EOS)</strong> — idempotent producers + transactions ensure each message processed exactly once.
                <br/>• <strong>Pull-based consumption</strong> — consumers pull at their own pace; no backpressure on producers.
                <br/>• <strong>Ecosystem</strong> — Kafka Streams, Kafka Connect, Schema Registry, ksqlDB.
              </p>`
          },
          {
            q:   'How do you start a Kafka server?',
            tag: 'easy',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> Starting a Kafka server depends on the mode — ZooKeeper mode (legacy) or KRaft mode (modern).
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Shell</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code># ─── ZooKeeper mode (legacy, Kafka < 3.3) ───

# 1. Start ZooKeeper first
bin/zookeeper-server-start.sh config/zookeeper.properties

# 2. Start Kafka broker
bin/kafka-server-start.sh config/server.properties

# ─── KRaft mode (modern, Kafka 3.3+, no ZooKeeper) ───

# 1. Generate cluster ID
KAFKA_CLUSTER_ID="$(bin/kafka-storage.sh random-uuid)"

# 2. Format storage directory
bin/kafka-storage.sh format -t $KAFKA_CLUSTER_ID -c config/kraft/server.properties

# 3. Start Kafka
bin/kafka-server-start.sh config/kraft/server.properties

# ─── Verify: create a test topic ───
bin/kafka-topics.sh --create --topic test --partitions 1 \
  --replication-factor 1 --bootstrap-server localhost:9092</code></pre>
              </div>`
          },
          {
            q:   'What do you mean by geo-replication in Kafka?',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> <strong>Geo-replication</strong> (cross-datacenter replication) in Kafka refers to replicating data from one Kafka cluster to another cluster in a different geographic location or data center. Native Kafka replication (ISR) only works within a single cluster.
                <br/><br/><strong>Tools for geo-replication:</strong>
                <br/>1. <strong>MirrorMaker 2 (MM2)</strong> — official Kafka tool. Uses Kafka Connect under the hood. Continuously replicates topics between clusters. Supports active-active and active-passive setups.
                <br/>2. <strong>Confluent Replicator</strong> — commercial Confluent Platform tool with additional enterprise features (offset translation, topic configuration sync).
                <br/><br/><strong>Use cases:</strong>
                <br/>• <strong>Disaster Recovery</strong> — secondary region takes over if primary fails.
                <br/>• <strong>Data Locality</strong> — serve consumers from nearest datacenter.
                <br/>• <strong>Compliance</strong> — keep copies in specific regions for regulatory requirements.
                <br/>• <strong>Analytics</strong> — aggregate data from multiple clusters into a central analytics cluster.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Properties</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code># MirrorMaker 2 config (mm2.properties)
clusters = dc1, dc2
dc1.bootstrap.servers = dc1-kafka:9092
dc2.bootstrap.servers = dc2-kafka:9092

# Replicate from dc1 to dc2
dc1->dc2.enabled = true
dc1->dc2.topics = orders, payments, events</code></pre>
              </div>`
          },
          {
            q:   'What are some of the disadvantages of Kafka?',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong>
                <br/><br/>• <strong>Operational complexity</strong> — requires careful tuning of many configs (producer, consumer, broker, topic). Complex to operate at scale without dedicated expertise.
                <br/>• <strong>No built-in message transformation</strong> — Kafka is a log, not a processor. You need Kafka Streams or an external system for message enrichment/transformation.
                <br/>• <strong>Ordering only within a partition</strong> — global ordering across partitions is not guaranteed. Requires careful partitioning strategy.
                <br/>• <strong>No per-message TTL</strong> — retention is configured at the topic level (time or size), not per individual message.
                <br/>• <strong>Re-consumption of messages</strong> — if offsets are not managed carefully, consumers may reprocess messages, requiring idempotent processing logic.
                <br/>• <strong>Not ideal for low-throughput use cases</strong> — overkill for simple point-to-point messaging. RabbitMQ may be simpler for straightforward queue needs.
                <br/>• <strong>Schema management overhead</strong> — requires a schema registry for structured data (Avro/Protobuf).
                <br/>• <strong>High disk usage</strong> — persistent storage with configurable retention means significant disk consumption.
              </p>`
          },
          {
            q:   'Tell me about some of the real-world usages of Apache Kafka.',
            tag: 'easy',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong>
                <br/><br/>• <strong>LinkedIn (Kafka's birthplace)</strong> — activity tracking, metrics pipeline, log aggregation. Processes trillions of messages per day.
                <br/>• <strong>Uber</strong> — real-time surge pricing, ride matching, driver location updates. Streams 1+ trillion messages daily.
                <br/>• <strong>Netflix</strong> — real-time event streaming for recommendation engine, change-data-capture (CDC) from databases.
                <br/>• <strong>Airbnb</strong> — event logging, metrics, and stream processing for personalisation.
                <br/>• <strong>Walmart</strong> — real-time inventory updates, fraud detection.
                <br/><br/><strong>Common patterns:</strong>
                <br/>• <strong>Event Sourcing</strong> — Kafka as the event log; rebuild application state by replaying events.
                <br/>• <strong>CDC (Change Data Capture)</strong> — Debezium captures DB changes and streams them to Kafka.
                <br/>• <strong>Log Aggregation</strong> — centralise logs from microservices into Kafka, feed to ELK stack.
                <br/>• <strong>Stream Processing</strong> — real-time ETL, fraud detection, IoT data processing.
                <br/>• <strong>Microservices decoupling</strong> — services communicate asynchronously via Kafka topics.
              </p>`
          },
          {
            q:   'What are the use cases of Kafka monitoring?',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> Kafka monitoring is critical for ensuring reliability, performance, and data integrity. Key metrics and use cases:
                <br/><br/><strong>Producer monitoring:</strong>
                <br/>• <code>record-send-rate</code>, <code>record-error-rate</code> — detect failed writes.
                <br/>• <code>request-latency-avg</code> — producer latency trending.
                <br/><br/><strong>Consumer monitoring:</strong>
                <br/>• <code>consumer-lag</code> — most critical metric. If lag is growing, consumers can't keep up.
                <br/>• <code>records-consumed-rate</code> — consumption throughput.
                <br/><br/><strong>Broker monitoring:</strong>
                <br/>• <code>UnderReplicatedPartitions</code> — partitions with fewer than expected ISR. Indicates broker issues.
                <br/>• <code>OfflinePartitionsCount</code> — partitions with no leader (critical alert).
                <br/>• <code>ActiveControllerCount</code> — exactly 1 must be active; alerts if 0 or &gt;1.
                <br/>• Disk usage, network I/O, request rate, response rate.
                <br/><br/><strong>Tools:</strong> Kafka JMX metrics, Prometheus + Grafana, Confluent Control Center, Burrow (consumer lag monitor), Cruise Control (broker rebalancing).
              </p>`
          },
          {
            q:   'What do you mean by Kafka Schema Registry?',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> The <strong>Schema Registry</strong> (part of Confluent Platform, also available as open-source) is a centralized repository for managing and validating schemas used for serializing Kafka messages. It enforces schema compatibility, preventing producers from publishing messages that consumers cannot deserialize.
                <br/><br/><strong>Key features:</strong>
                <br/>• Supports <strong>Avro, JSON Schema, and Protobuf</strong> formats.
                <br/>• Stores versioned schemas; each schema gets a unique ID.
                <br/>• Instead of embedding the full schema in every message, producers only embed the schema ID (4 bytes) — dramatically reducing message size.
                <br/>• Enforces <strong>compatibility rules</strong>: BACKWARD (new schema reads old data), FORWARD (old schema reads new data), FULL, NONE.
                <br/><br/><strong>Workflow:</strong>
                <br/>1. Producer registers schema → gets schema ID.
                <br/>2. Producer serializes data using Avro + embeds schema ID in message.
                <br/>3. Consumer reads schema ID → fetches schema from registry → deserializes.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">JSON</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>// Avro schema registered in Schema Registry
{
  "type": "record",
  "name": "Order",
  "fields": [
    { "name": "orderId",  "type": "string" },
    { "name": "amount",   "type": "double" },
    { "name": "status",   "type": "string", "default": "PENDING" }
  ]
}</code></pre>
              </div>`
          },
          {
            q:   'What are the benefits of using clusters in Kafka?',
            tag: 'easy',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> A Kafka <strong>cluster</strong> is a group of multiple brokers working together. Benefits:
                <br/><br/>• <strong>High Availability</strong> — if one broker goes down, other brokers continue serving. Partitions with replicas on surviving brokers elect new leaders automatically.
                <br/>• <strong>Horizontal Scalability</strong> — add more brokers to increase capacity. More brokers = more partition leaders = higher throughput.
                <br/>• <strong>Load Distribution</strong> — topic partitions and their leaders are spread across brokers, distributing read/write load.
                <br/>• <strong>Fault Tolerance</strong> — with replication factor 3, data survives 2 simultaneous broker failures.
                <br/>• <strong>Geo-distribution</strong> — brokers in different racks or availability zones for rack-aware replication.
                <br/>• <strong>Zero-downtime maintenance</strong> — brokers can be taken down for upgrades (rolling restarts) without service interruption.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Text</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>Kafka Cluster (3 brokers)
┌──────────────────────────────────────┐
│ Broker 1  │  Broker 2  │  Broker 3  │
│ Leader P0 │  Leader P1 │  Leader P2 │
│ Follow P1 │  Follow P2 │  Follow P0 │
│ Follow P2 │  Follow P0 │  Follow P1 │
└──────────────────────────────────────┘
  Broker 1 fails → P0 elects new leader from B2/B3</code></pre>
              </div>`
          },
          {
            q:   'Describe the partitioning key in Kafka.',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> A <strong>partitioning key</strong> is an optional value provided by the producer when sending a message. It determines which partition the message goes to.
                <br/><br/><strong>How it works:</strong>
                <br/>• If a key is provided: <code>partition = hash(key) % numberOfPartitions</code>. All messages with the same key always go to the same partition → ensures ordering for that key.
                <br/>• If no key is provided: messages are distributed in a round-robin or sticky fashion across partitions for load balancing.
                <br/><br/><strong>Use cases for keyed messages:</strong>
                <br/>• All orders for a specific <code>userId</code> go to the same partition → ordered processing per user.
                <br/>• All transactions for an account → same partition → sequential processing.
                <br/><br/><strong>Caution:</strong> Choosing a key with low cardinality (e.g., country with only 3 values) causes partition skew — some partitions get much more data than others.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Java</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>// Send with key — same userId always goes to same partition
ProducerRecord&lt;String, String&gt; record =
    new ProducerRecord&lt;&gt;("orders", userId, orderJson);
producer.send(record);

// Send without key — round-robin distribution
ProducerRecord&lt;String, String&gt; record =
    new ProducerRecord&lt;&gt;("events", null, eventJson);
producer.send(record);</code></pre>
              </div>`
          },
          {
            q:   'What is the purpose of partitions in Kafka?',
            tag: 'medium',
            body: `
              <p class="accordion-answer">
                <strong>Interview Answer:</strong> Partitions serve multiple critical purposes:
                <br/><br/>1. <strong>Parallelism &amp; Scalability</strong> — a topic with N partitions can be consumed by up to N consumers in parallel. Each consumer in a group handles a subset of partitions, enabling horizontal scaling of consumers.
                <br/><br/>2. <strong>Ordered Processing</strong> — messages within a single partition are strictly ordered by offset. Using a key ensures all related messages (same order, same user) go to the same partition and are processed in order.
                <br/><br/>3. <strong>Fault Tolerance</strong> — each partition has replicas on multiple brokers. If the leader broker fails, a follower in ISR becomes the new leader.
                <br/><br/>4. <strong>Storage Distribution</strong> — data is spread across brokers. Each broker holds a subset of partitions, preventing any single broker from becoming a bottleneck.
                <br/><br/>5. <strong>Independent Offset Management</strong> — each consumer group tracks its position (offset) independently per partition, enabling replay, different processing rates, and independent consumers.
              </p>
              <div class="code-block-wrap">
                <div class="code-block-header"><span class="code-lang">Text</span><button class="code-copy-btn" data-copy>Copy</button></div>
                <pre><code>Topic: payments (4 partitions)
                                              Consumer Group
P0: [tx1][tx4][tx7] ──────────────────────▶  Consumer A
P1: [tx2][tx5][tx8] ──────────────────────▶  Consumer B
P2: [tx3][tx6][tx9] ──────────────────────▶  Consumer C
P3: [txA][txB][txC] ──────────────────────▶  Consumer D

4 consumers × 4 partitions = maximum parallelism</code></pre>
              </div>`
          }
        ]
      }
    ];

export default DAYS;
