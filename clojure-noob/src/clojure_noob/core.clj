(ns clojure-noob.core
  (:gen-class))

(defn -main
  "I don't do a whole lot ... yet."
  [& args]
  (println "Hello, World!"))

(-main)

(println "Cleanliness is next to godliness")

(defn train
  []
  (println "Choo choo!"))

(train)

(+ 1 (* 2 3) 4)

(map (comp record first)
     (d/q '[:find ?post
            :in $ ?search
            :where
            [(fulltext $ :post/content ?search)
             [[?post ?content]]]]
          (db/db)
          (:q params)))


(if true
      (train)
      (-main))

(str "It was the panda " "in the library " "with a dust buster")


;;; ==== 语法 ====

;; IF 没有else，但相当于 if ... else
(if true
  "By Zeus's hammer!"
  "By Aquaman's trident!")

(if false
  "By Odin's Elbow!")

;; DO 将操作包裹起来，像ruby中的do...end，块级操作符
(if true
  (do (println "Success!")
      "By Zeus's hammer!")
  (do (println "Failure!")
      "By Aquaman's trident!"))

;; WHEN相当于没有else分支的if操作
(when true
  (println "Success!")
  "abra cadabra")

(nil? 1)

;; NIL means no value, false is not nil, false is the opsite of true
(nil? nil)
(nil? false)

;; only NIL and FALSE are logically falsiness
(if nil
  "nil is true"
  "nil is false")

(if false
  "false is true"
  "false is false")

(if ()
  "() is true"
  "() is false")

(if "false"
  "string 'false' is true"
  "string 'false' is false")

(if "bears eat beets"
  "bears beets Battlestar Galactica")

;; 判断相等
(= 1 1)
(= nil nil)
(= nil false)

;; OR returns either the first truethy value or the last value
(or false nil :large_I_mean_venti :why_cant_I_just_say_large)

(if :large_I_mean_venti
  ":large_I_mean_venti is true"
  ":large_I_mean_venti is false")
;; why symbol is truethy even if it has not been defined


(or (= 0 1) (= "yes" "no"))
(or false nil)
(or nil false)


;; AND returns the last truethy value or the first falsy value
(and :free_wifi :hot_coffee)

(and :feelin_super_cool nil false)

;; DEF 将值与名称绑定 bind name to value
(def failed-protagonist-names
  ["Larry Potter" "Doreen the Explorer" "The Incredible Bulk"])
;; which is a VECTOR

failed-protagonist-names

;; 尽管def实际执行的是赋值操作，函数式编程不建议用def来改变变量的值；
;; 可以用定义函数的方式来使某个函数在不同的输入下产生不同的输出


;;; ==== 数据结构 ====

;; Clojure的所有数据结构都是不可变的
;; 意味着函数式编程，使得程序语句没有side effect，只有返回值的影响

(* 5 1/5)
;; what is 1N?
(+ 2 1N)

"\"Great cow of Moscow!\" - Hermes Conrad"


;; Strings: Clojure 没有字符串插值，只允许concat
(def name "Chewbacca")
(str "\"Uggllglglglglglglglll\" - " name)

;; Maps: 类似hash或dict。 两种类型： hash maps and sorted maps
;; empty map:
{}

;; keyword and value
{:first-name "Charlie"
 :last-name "McFishwich"}

;; asso a key with a core function
{"string-key" +}

;; nested
{:name {:first "John" :middle "Jacob" :last "Jingleheimerschmidt"}}
;; values can be any type, even functions

;; also use `hash-map' function to create a map
(hash-map :a 1 :b 2)

;; lookup
(get {:a 0 :b 1} :b)

(get {:a 0 :b {:c "ho hum"}} :b)

;; return nil if not find
(get {:a 0 :b 1} :c)

;; return a default if not find
(get {:a 0 :b 1 :c 2} :c "unicorns?")
(get {:a 0 :b 1} :c "unicorns?")

;; or use get-in to get nested values
(def name {:name {:first "John" :middle "Jacob" :last "Jingleheimerschmidt"}})
;; a not recommend usage
(get name :name)
(get (get name :name) :middle)
;; a sound way
(get-in {:a 0 :b {:c "ho hum"}} [:b :c])
(get-in name [:name :middle])

;; 除了get，第二种方式，将map做为函数，将key作为参数
;; omit get, another way to get value in map
({:name "The Human Coffeepot"} :name)

;; 第三种，更好的方式，将key作为函数
(:a {:a 1 :b 2 :c 3})
;; 等价于
(get {:a 1 :b 2 :c 3} :a)
;; 赋默认值
(:d {:a 1 :b 2 :c 3} "No gnome knows homes like Noah knows")


;; 向量 Vector
[3 2 1]
;; get
(get [3 2 1] 0)
(get [3 2 1] 3) ;; => nil
;; 向量的元素也可以为任意类型，可以混用
(get ["a" {:name "Pugsley Winterbottom"} "c"] 1)
;; 构造向量
(vector "creepy" "full" "moon")
;; conj添加元素（向尾部）与list相反
(conj [1 2 3] 4)
(conj '(2 3 4) 1)
(= '(1 2 3 4) (conj '(3 4) 2 1))
(= [:a :b :c] (list :a :b :c) (vec '(:a :b :c)) (vector :a :b :c))
(= '(:a :b :c) (list :a :b :c) (vec '(:a :b :c)) (vector :a :b :c))
(list :a :b :c)
(vector :a :b :c)
(= (list :a :b :c) (vector :a :b :c))
(= '(:a :b :c) [:a :b :c])  ;; => true

;; 列表 List
'(1 2 3 4)
;; 不能使用get，用nth，nth性能不如get
(nth '(:a :b :c) 2)
(nth '(:a :b :c) 3) ;; 报错
;; 构造列表
(list 1 "two" {3 4})
;; conj添加元素（向头部）与vector相反
(conj '(1 2 3) 4)

;; 什么时候用vector，什么时候用list？
;; list用于：
;; 1. 需要很容易地向头部添加元素的情况
;; 2. 写宏
;; 除此之外用vector


;; 集合 Sets -- collection of unique values
;; 两类： hash sets and sorted sets
;; hashed sets literal notation:
#{"kurt vonnegut" 20 :icicle}

;; 构造
(hash-set 1 1 2 2)
;; conj 添加元素
(conj #{:a :b} :b)
;; 检查是否包含元素
(contains? #{:a :b} :a)  ;; true
(contains? #{nil} nil) ;; true
(contains? [1 2 3] 1) ;; true
(contains? '(1 2 3) 1) ;; 报错

;; 用key查找，找到返回元素，找不到返回nil
(:a #{:a :b})
(:a #{:b})
;; 用get查找，找到返回元素，找不到返回nil
(get #{:a :b} :a)
(get #{:a nil} nil) ;; 这种情况用contains?更好
(get #{:a :b} "kurt vonnegut")


;; Simplicity
;; Clojure强调简化，建议优先使用内置类型，不建议定义新type或class
;; It is better to have 100 functions operate on one data structure than 10 functions on 10 data structures.


;;; ==== Functions ====
;; 所谓函数就是： 开括号、操作符、操作数(s)、闭括号
;; 函数表达式function expression --> 返回函数的表达式
(or + -)
;; 将返回值用做操作符
((or + -) 1 2 3)

((and (= 1 1) +) 1 2 3)
((and (= 1 2) +) 1 2 3) ;; 报错

((first [+ 0]) 1 2 3)

;; 数字和字符串不是函数，下面两个不是函数调用
(1 2 3 4)
("test" 1 2 3)
;; 下面的是函数调用, 这两个的返回值是怎么回事
(:a 1 2)
({} 1 2)

;; inc: +1
(inc 1.1)
;; map: 构造列表 -- 将函数参数应用于collection
;; 注意 map 不返回vector而返回list
(map inc [0 1 2 3])
(map inc '(1 2))
(map inc #{1 2})
(map inc {:a 1 :b 2}) ;; 报错

;; 函数调用的求值操作是递归的

;; Function Calls, Macro Calls, and Special Forms
;; 这是三种表达式类型，上面已看过函数调用
;; 上面的IF和DEF是Special Forms
;; special form之所以special:
;; 1. 是因为它们 don't always evaluate ALL of their oprands
;; （不总是对其所有的操作数求值） 函数/宏调用总是对所有操作数求值？
;; 例如
(if false
  (tweet walking-on-sunshine-lyrics)  ;; 这个操作数不会被求值
  (tweet mopey-country-song-lyrics))
;; 2. 它们不能作为函数的参数使用（宏也不能）
;; 总的来说，special form用于实现那些函数不能实现的Clojure的核心功能
;; Clojure只有几个special form

;; 宏对其操作数的求值方式与函数不同
;; 宏也不能作为函数的参数使用

;; 函数的定义

(defn too-enthusiastic                                                  ;; function name
  "Return a cheer that might be a bit too enthusiastic"                 ;; doc string
  [name]                                                                ;; params
  (str "OH. MY. GOD! " name " YOU ARE MOST DEFINITELY LIKE THE BEST "   ;; function body
       "MAN SLASH WOMAN EVER I LOVE YOU AND WE SHOULD RUN AWAY SOMEWHERE"))

;; 使用doc函数打印doc string
(doc too-enthusiastic)
(doc map)

;; arity -- 函数参数的数量（函数接受几个参数）
;; 0-arity -- 没有参数
;; 1-arity -- 只有一个参数

;; 重载 arity overloading
;; 根据参数数量的不同，选择执行的function body
;; 每个arity定义都要包含在一个括号内
(defn x-chop
  "Describe the kind of chop you're inflicting on someone"
  ([name chop-type]
     (str "I " chop-type " chop " name "! Take that!"))
  ([name]
     (x-chop name "karate")))
;; 这也是为函数参数提供默认值的方法 -- 用到了递归
(x-chop "Kanye West" "slap")
(x-chop "Kanye East")
;; 在Clojure中也可以提供rest参数
;; 写成[& somename]，这会将剩余的参数组成一个List放在somename中
(defn codger-communication
  [whippersnapper]
  (str "Get off my lawn, " whippersnapper "!!!"))
(defn codger
  [& whippersnappers]
  (map codger-communication whippersnappers))
(codger "Billy" "Anne-Marie" "The Incredible Bulk")
;; rest参数必须在最后出现
(defn favorite-things
  [name & things]
  (str "Hi, " name ", here are my favorite things: "
       (clojure.string/join ", " things)))

(favorite-things "Doreen" "gum" "shoes" "kara-te")

(defn rest-param-type
  [& params]
  params)
(rest-param-type "Doreen" "gum" "shoes" "kara-te")
;; list, not vector

;; 定义参数的复杂方式： 解构 Destructuring
;; Return the first element of a collection
(defn my-first
  [[first-thing]] ; Notice that first-thing is within a vector
  first-thing)

(defn my-second
  [[first-thing, second]] ; Notice that first-thing is within a vector
  second)
(my-first ["oven" "bike" "war-axe"])
(my-second ["oven" "bike" "war-axe"])
(second ["oven" "bike" "war-axe"])

;; 解构的时候也可以使用&操作符捕获剩余参数
(defn chooser
  [[first-choice second-choice & unimportant-choices]]
  (println (str "Your first choice is: " first-choice))
  (println (str "Your second choice is: " second-choice))
  (println (str "We're ignoring the rest of your choices. "
                "Here they are in case you need to cry over them: "
                (clojure.string/join ", " unimportant-choices))))
(chooser ["Marmalade", "Handsome Jack", "Pigpen", "Aquaman"])

;; 解构map
(defn announce-treasure-location
  [{lat :lat lng :lng}]
  (println (str "Treasure lat: " lat))
  (println (str "Treasure lng: " lng)))
(announce-treasure-location {:lat 28.22 :lng 81.33})
;; 简化版
(defn announce-treasure-location
  [{:keys [lat lng]}]
  (println (str "Treasure lat: " lat))
  (println (str "Treasure lng: " lng)))


;; :as 将解构的参数保存在新的map中
(defn receive-treasure-location
  [{:keys [lat lng] :as treasure-location}]
  (println (str "Treasure lat: " lat))
  (println (str "Treasure lng: " lng))
  ;; One would assume that this would put in new coordinates for your ship
  (steer-ship! treasure-location))


;; 函数被调用时返回的是最后一个form求值后的结果
(defn illustrative-function
  []
  (+ 1 304)
  30
  "joe")
(illustrative-function)
(defn number-comment
  [x]
  (if (> x 6)
    "Oh my gosh! What a big number!"
    "That number's OK, I guess"))
(number-comment 5)
(number-comment 7)

;; 所有函数生而平等 +, -, inc, map, 自定义的函数都没什么不同

;; 匿名函数 1. fn 2. #(%) (reader macros)
(fn [param-list]
  function body)
(map (fn [name] (str "Hi, " name))
     ["Darth Vader" "Mr. Magoo"])
((fn [x] (* x 3)) 8)

;; fn与defn一样，可以使用rest参数和解构赋值
(def my-special-multiplier (fn [x] (* x 3)))
(my-special-multiplier 12)

(fn [x] (* x 3))
#(* % 3)
(#(* % 3) 8)
;; %表参数
(map #(str "Hi, " %)
     ["Darth Vader" "Mr. Magoo"])
;; 参数列表 %1 %2
(#(str %1 " and " %2) "cornbread" "butter beans")
;; 剩余参数 %&
(#(identity %&) 1 "blarg" :yip)
(identity '(1 2 3))

;; 返回函数
;; 返回函数是闭包，它们可以访问创建该函数的上下文scope中的变量
(defn inc-maker
  "Create a custom incrementor"
  [inc-by]
  #(+ % inc-by))

(def inc3 (inc-maker 3))
(def inc4 (inc-maker 4))
(inc3 7)
(inc4 7)


;; smacking hobbits
(def asym-hobbit-body-parts [{:name "head" :size 3}
                             {:name "left-eye" :size 1}
                             {:name "left-ear" :size 1}
                             {:name "mouth" :size 1}
                             {:name "nose" :size 1}
                             {:name "neck" :size 2}
                             {:name "left-shoulder" :size 3}
                             {:name "left-upper-arm" :size 3}
                             {:name "chest" :size 10}
                             {:name "back" :size 10}
                             {:name "left-forearm" :size 3}
                             {:name "abdomen" :size 6}
                             {:name "left-kidney" :size 1}
                             {:name "left-hand" :size 2}
                             {:name "left-knee" :size 2}
                             {:name "left-thigh" :size 4}
                             {:name "left-lower-leg" :size 3}
                             {:name "left-achilles" :size 1}
                             {:name "left-foot" :size 2}])
(defn matching-part
  [part]
  {:name (clojure.string/replace (:name part) #"^left-" "right-")
   :size (:size part)})

(defn symmetrize-body-parts
  "Expects a seq of maps that have a :name and :size"
  [asym-body-parts]
  (loop [remaining-asym-parts asym-body-parts
         final-body-parts []]
    (if (empty? remaining-asym-parts)
      final-body-parts
      (let [[part & remaining] remaining-asym-parts]
        (recur remaining
               (into final-body-parts
                     (set [part (matching-part part)])))))))

(symmetrize-body-parts asym-hobbit-body-parts)

;; take:
;; "Returns a lazy sequence of the first n items in coll, or all items if
;; there are fewer than n.  Returns a stateful transducer when
;; no collection is provided."
(take 2 dalmatian-list)
(take 2)
;; let binds names to values
(let [x 3]
  x)
;; let x be 3 and returns x
(def dalmatian-list
  ["Pongo" "Perdita" "Puppy 1" "Puppy 2"])

;; let dalmatians to be a list of the first two items
;; in dalmatian-list and returns dalmatians
(let [dalmatians (take 2 dalmatian-list)]
  dalmatians)
;; let also introduces a new scope
(def x 0)
(let [x 1] x)
(def x 0)
(let [x (inc x)] x)
(let [[pongo & dalmatians] dalmatian-list]
  [pongo dalmatians])

;; loop:
;; loop is exactly like let, except that it establishes a recursion point at the top of the loop,
;; with arity equal to the number of bindings. See recur.
(doc loop)

;; recur:
;; Evaluates the exprs in order, then, in parallel, rebinds the bindings of the recursion point
;; to the values of the exprs. If the recursion point was a fn method, then it rebinds the params.
;; If the recursion point was a loop, then it rebinds the loop bindings.
;; Execution then jumps back to the recursion point. The recur expression must match the
;; arity of the recursion point exactly. In particular, if the recursion point was the top of
;; a variadic fn method, there is no gathering of rest args - a single seq (or null) should be
;; passed. recur in other than a tail position is an error.
(doc recur)

;; into:
;;  "Returns a new coll consisting of to-coll with all of the items of
;;  from-coll conjoined. A transducer may be supplied."
(doc into)

(into [] [:a :b])
(into [:a] [:b])

;; set
;;  "Returns a set of the distinct elements of coll."

(set [:a :a :b])
(hash-set :a :a :b)

(into [] (set [:a :a]))
(into [:a] (set [:a :a :b]))

;; loop
(loop [iteration 0]
  (println (str "Iteration " iteration))
  (if (> iteration 3)
    (println "Goodbye!")
    (recur (inc iteration))))
;; recur将表达式(inc iteration)的结果带入loop的recursion point的binding中

;; 多个参数
(loop [iteration 0 remaining 5]
  (println (str "Iteration " iteration ", Remaining " remaining))
  (if (> iteration 3)
    (println "Goodbye!")
    (recur (inc iteration) (dec remaining))))


;; 正则表达式
#"regular-expression"
#"^left-"

;; re-find:
;; checks whether a string matches the pattern described by a regular expression,
;; returning the matched text or nil if there is no match:
(re-find #"^left-" "left-side")
(re-find #"^left-" "right-side")
(re-find #"^left-" "cleft-side")
(re-find #"^left-" "leftside")

(defn matching-part
  [part]
  {:name (clojure.string/replace (:name part) #"^left-" "right-")
   :size (:size part)})
(matching-part {:name "left-eye" :size 1})
(matching-part {:name "head" :size 3})
(clojure.string/replace "left-eye" #"^left-" "right-")
(clojure.string/replace "head" #"^left-" "right-")

;; Better Symmetrizer with reduce
(reduce + [1 2 3 4])
(+ (+ (+ 1 2) 3) 4)

(defn my-reduce
  ([f initial coll]
   (loop [result initial
          remaining coll]
     (if (empty? remaining)
       result
       (recur (f result (first remaining)) (rest remaining)))))
  ([f [head & tail]]
   (my-reduce f head tail)))
(my-reduce + [1 2 3 4])

(defn better-symmetrize-body-parts
  "Expects a seq of maps that have a :name and :size"
  [asym-body-parts]
  (reduce (fn [final-body-parts part]
            (into final-body-parts (set [part (matching-part part)])))
          []
          asym-body-parts))
(better-symmetrize-body-parts asym-hobbit-body-parts)

(str "ds" "sdf" "dfsa")
(str)
(str nil)
(str "d" nil)
(str "d" nil "d")
(str 2345124)
(str :dfsa)
(vector 1 2 nil 3 4)
(vector nil)
(vector)
(vector ())
(list)
(list ())
(list nil)
(list 1 2)
(hash-map :a 1 :b 2)
(hash-map)
(hash-map nil) ;; error
(hash-map nil nil)
(hash-map 1 2 3 4)
(hash-map "dsf" 1 "dsd" nil)
(hash-set)
(hash-set nil)
(hash-set nil nil)
(hash-set ())
(doc hash-set)
(hash-set [])

(defn add100
  "takes a number and add 100 to it"
  [number]
  (+ number 100))
(add100 1)
(add100 99)


(defn dec-maker
  "create a custom decreasement function maker"
  [number]
  #(- % number))

(def dec9 (dec-maker 9))
(dec9 10)
(defn dec-maker
  "use fn to return a function"
  [number]
  (fn [arg]
    (- arg number)))

(defn mapset
  " works like map except the return value is a set"
  [func [& args]]
  (set (map func args)))

(mapset inc [1 1 2 2])

(def asym-hobbit-body-parts [{:name "head" :size 3}
                             {:name "left-eye" :size 1}
                             {:name "left-ear" :size 1}
                             {:name "mouth" :size 1}])



;; core sequence functions first, rest, and cons
(doc cons)
(doc first)
(doc rest)

(cons 1 [2])
(cons [1] [2])
(first {:a 1, :b 3})
(rest {:a 1, :b 3})
(rest {:a 1})
(def a {:a 1 :b 3})
(def b {:a 1, :b 3})
(= a b)


(defn titleize
  [topic]
  (str topic " for the Brave and True"))

(second {:a 1 :b 2})
(second {:a 1})
(second '({:a 1 :b 2}))
(#(second %) {:a 1}) ;; => nil

(map titleize ["Hamsters" "Ragnarok"])

(map titleize '("Empathy" "Decorating"))

(map titleize #{"Elbows" "Soap Carving"})

(map #(titleize (second %)) {:uncomfortable-thing "Winking"})  ;; <ref1>

(seq '(1 2 3))
(seq [1 2 3])
(seq #{1 2 3})
(seq {:name "Bill Compton" :occupation "Dead mopey guy"}) ;; <== this is why <ref1> returns Winking ...

(doc seq)

;; 还原
(into {} (seq {:a 1 :b 2 :c 3}))

(map str ["a" "b" "c"] ["A" "B" "C"])

(def human-consumption   [8.1 7.3 6.6 5.0])
(def critter-consumption [0.0 0.2 0.3 1.1])
(defn unify-diet-data
  [human critter]
  {:human human
   :critter critter})

(map unify-diet-data human-consumption critter-consumption)

(def sum #(reduce + %))
(sum '(1 2 3 4))
(def avg #(/ (sum %) (count %)))
(count '(1 2 3 4))
(avg '(1 2 3 4))
(defn stats
  [numbers]
  (map #(% numbers) [sum count avg]))

(stats '(1 2 3 4))

(stats [3 4 10])

(stats [80 1 44 13 6])


;; 将 key 用作函数获取 values
(def identities
  [{:alias "Batman" :real "Bruce Wayne"}
   {:alias "Spider-Man" :real "Peter Parker"}
   {:alias "Santa" :real "Your mom"}
   {:alias "Easter Bunny" :real "Your dad"}])

(map :real identities)  ;; awesome!!


;; use reduce to update a map's values
(reduce (fn [new-map [key val]]
          (assoc new-map key (inc val)))
        {}
        {:max 30 :min 10})
(assoc {:b 2} :a 1)

;; use reduce to filter map items
(reduce (fn [new-map [key val]]
          (if (> val 4)
            (assoc new-map key val)
            new-map))
        {}
        {:human 4.1
         :critter 3.9})

(take 3 [1 2 3 4 5 6 7 8 9 10])
; => (1 2 3)

(drop 3 [1 2 3 4 5 6 7 8 9 10])
; => (4 5 6 7 8 9 10)

(def food-journal
  [{:month 1 :day 1 :human 5.3 :critter 2.3}
   {:month 1 :day 2 :human 5.1 :critter 2.0}
   {:month 2 :day 1 :human 4.9 :critter 2.1}
   {:month 2 :day 2 :human 5.0 :critter 2.5}
   {:month 3 :day 1 :human 4.2 :critter 3.3}
   {:month 3 :day 2 :human 4.0 :critter 3.8}
   {:month 4 :day 1 :human 3.7 :critter 3.9}
   {:month 4 :day 2 :human 3.7 :critter 3.6}])

(take-while #(< (:month %) 3) food-journal)

(drop-while #(< (:month %) 3) food-journal)

(take-while #(< (:month %) 4)
            (drop-while #(< (:month %) 2) food-journal))

(filter #(< (:human %) 5) food-journal)

(filter #(< (:month %) 3) food-journal)

(some #(> (:critter %) 5) food-journal)

(some #(> (:critter %) 3) food-journal)

(some #(and (> (:critter %) 3) %) food-journal)
(and (> (:critter {:month 1 :day 1 :human 5.3 :critter 2.3}) 3) {:month 1 :day 1 :human 5.3 :critter 2.3})

(doc some) ;; 返回第一个trueth值，否则返回nil

(sort [3 1 2])

(sort-by count ["aaa" "c" "bb"])
(map count ["aaa" "c" "bb"])

(concat [1 2] [3 4])

(def vampire-database
  {0 {:makes-blood-puns? false, :has-pulse? true  :name "McFishwich"}
   1 {:makes-blood-puns? false, :has-pulse? true  :name "McMackson"}
   2 {:makes-blood-puns? true,  :has-pulse? false :name "Damon Salvatore"}
   3 {:makes-blood-puns? true,  :has-pulse? true  :name "Mickey Mouse"}})

(defn vampire-related-details
  [social-security-number]
  (Thread/sleep 1000)
  (get vampire-database social-security-number))

(defn vampire?
  [record]
  (and (:makes-blood-puns? record)
       (not (:has-pulse? record))
       record))

(defn identify-vampire
  [social-security-numbers]
  (first (filter vampire?
                 (map vampire-related-details social-security-numbers))))

(time (vampire-related-details 0))
(doc time)

(time (def mapped-details (map vampire-related-details (range 0 1000000))))
;; only on you calls: mapped-details when it will takes 10^6 seconds to execute
(time (first mapped-details)) ;; takes about 32 seconds because Clojure try to realize the specified element and the next 31

(time (first mapped-details))
(time (identify-vampire (range 0 1000000)))

(concat (take 8 (repeat "na")) ["Batman!"])
(repeat "a") ;; this will never end
(take 3 (repeatedly (fn [] (rand-int 10))))
(doc rand)
(doc rand-int)

(sum (take 300 (repeatedly (fn [] (rand-int 1000)))))

(doc repeat)
(doc repeatedly) ;; repeatedly call the function

(repeat 3 "a")

(defn even-numbers
  ([] (even-numbers 0))
  ([n] (cons n (lazy-seq (even-numbers (+ n 2))))))
(take 10 (even-numbers))

(doc lazy-seq)
(doc realized?)

(empty? [])
(empty? ["no!"])

(map identity {:sunlight-reaction "Glitter!"})
(into {} (map identity {:sunlight-reaction "Glitter!"}))
(map identity [:garlic :sesame-oil :fried-eggs])
(doc identity)
(identity :a)
(into [] (map identity [:garlic :sesame-oil :fried-eggs]))
(map identity [:garlic-clove :garlic-clove])
(into #{} (map identity [:garlic-clove :garlic-clove]))
(into {:favorite-emotion "gloomy"} [[:sunlight-reaction "Glitter!"]])
(into ["cherry"] '("pine" "spruce"))
(into {:favorite-animal "kitty"} {:least-favorite-smell "dog"
                                  :relationship-with-teenager "creepy"})

(conj [0] [1])

(into [0] [1])

(conj [0] 1)

(conj [0] 1 2 3 4)

(conj {:time "midnight"} [:place "ye olde cemetarium"])
(defn my-conj
  [target & additions]
  (into target additions))

(my-conj [0] 1 2 3)

(max 0 1 2)
(max [0 1 2])
;; apply explodes the last param to pass to a function which accepts a rest param
(apply max [0 1 2])
(apply max 0 1 [1 2 3])
(apply max 0 1 2 3 4 [1 2 3])
(apply max [1 2 3] [0]) ;; error
(defn my-into
  [target additions]
  (apply conj target additions))

(my-into [0] [1 2 3])
(def add10 (partial + 10))
(add10 3)
(add10 5)
(def add-missing-elements
  (partial conj ["water" "earth" "air"]))
(add-missing-elements "unobtainium" "adamantium")

(defn my-partial
  [partialized-fn & args]
  (fn [& more-args]
    (apply partialized-fn (into args more-args))))

(def add20 (my-partial + 20))
(add20 3)

(defn lousy-logger
  [log-level message]
  (condp = log-level
    :warn (clojure.string/lower-case message)
    :emergency (clojure.string/upper-case message)))

(def warn (partial lousy-logger :warn))
(def emergency (partial lousy-logger :emergency))

(warn "Red light ahead")
(emergency "Red light ahead")

(defn identify-humans
  [social-security-numbers]
  (filter #(not (vampire? %))
          (map vampire-related-details social-security-numbers)))

(def not-vampire? (complement vampire?))
(defn identify-humans
  [social-security-numbers]
  (filter not-vampire?
          (map vampire-related-details social-security-numbers)))
(time (identify-humans (range 0 10)))

(defn my-complement
  [fun]
  (fn [& args]
    (not (apply fun args))))

(def my-pos? (complement neg?))
(my-pos? 1)
(my-pos? -1)
(doc neg?)
(neg? -0)


(defn fddd [lst]
        ((fn [res l]
         (if (empty? l)
       (reverse res)
       (recur (conj res (first l) (first l)) (rest l)))) '() lst))

(fddd [1 2 3])
