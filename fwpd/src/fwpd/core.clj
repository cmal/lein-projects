(ns fwpd.core
  (:require [clojure.repl :refer [doc pst]]))
(def filename "suspects.csv")
(slurp filename)
(doc slurp)
(doc clojure.java.io/reader)

(def vamp-keys [:name :glitter-index])

(defn str->int
  [str]
  (Integer. str))
(str->int "10")

(def conversions {:name identity
                  :glitter-index str->int})

(defn convert
  [vamp-key value]
  ((get conversions vamp-key) value))

(convert :glitter-index "3")
(convert :name "Jacob")

(defn parse
  "Convert a CSV into rows of columns"
  [string]
  (map #(clojure.string/split % #",")
       (clojure.string/split string #"\n")))

(parse (slurp filename))

(defn mapify
  "Return a seq of maps like {:name \"Edward Cullen\" :glitter-index 10}"
  [rows]
  (map (fn [unmapped-row]
         (reduce (fn [row-map [vamp-key value]]
                   (assoc row-map vamp-key (convert vamp-key value)))
                 {}
                 (map vector vamp-keys unmapped-row)))
       rows))

(mapify (parse (slurp filename)))

(map vector [:a :b :c :d] [1 2 3])
(doc map)
(first (mapify (parse (slurp filename))))

(defn glitter-filter
  [minimum-glitter records]
  (filter #(>= (:glitter-index %) minimum-glitter) records))

(glitter-filter 3 (mapify (parse (slurp filename))))

(def glitter-filter-records
  (glitter-filter 3 (mapify (parse (slurp filename)))))

(doc reduce)
(defn glitter-filter-names
  [records]
  (reduce (fn [result-list record-map]
            (conj result-list (:name record-map)))
          ()
          records))
(glitter-filter-names glitter-filter-records)

(def suspects (mapify (parse (slurp filename))))
(defn append
  "append item to list"
  [list [name glitter-index]]
  (conj list {:name (convert :name name)
              :glitter-index (convert :glitter-index glitter-index)}))
(doc append)
(append suspects ["New One" "2"])

(:a {:b 2})

(defn validate
  "check whether record has keys in key-to-func-map"
  [key-to-func-map record]
  (reduce (fn [result [key func]]
            (and result (key record)))
          true
          key-to-func-map))

(validate conversions {:name "John" :glitter-index 2})
(defn append
  "validate and append the item to map"
  [list row-map]
  (if (validate conversions row-map)
    (conj list {:name (convert :name name)
                :glitter-index (convert :glitter-index glitter-index)})
    list)) ;; 乱七八糟的

(def validators {:name identity
                 :glitter-index int->str}) ;; ...
;; PLZ finish the exercises of Chapter 4



((comp inc *) 2 3)

(def character
  {:name "Smooches McCutes"
   :attributes {:intelligence 10
                :strength 4
                :dexterity 5}})
(def c-int (comp :intelligence :attributes))
(def c-str (comp :strength :attributes))
(def c-dex (comp :dexterity :attributes))

(c-int character)
(c-str character)
(c-dex character)

(defn spell-slots
  [char]
  (int (inc (/ (c-int char) 2))))

(spell-slots character)
;; the same
(def spell-slots-comp (comp int inc #(/ % 2) c-int))
(def spell-slots-comp (comp inc #(/ % 2) c-int))
(spell-slots-comp character)
(doc int)
(defn two-comp
  [f g]
  (fn [& args]
    (f (apply g args))))

(defn sleepy-identity
  "Returns the given value after 1 second"
  [x]
  (Thread/sleep 1000)
  x)
(sleepy-identity "Mr. Fantastico")
; => "Mr. Fantastico" after 1 second

(sleepy-identity "Mr. Fantastico")
; => "Mr. Fantastico" after 1 second

(def memo-sleepy-identity (memoize sleepy-identity))
(memo-sleepy-identity "Mr. Fantastico")
; => "Mr. Fantastico" after 1 second

(memo-sleepy-identity "Mr. Fantastico")

(doc assoc-in)
(doc get-in)
(get-in {:cookie {:monster {:vocals "Finntroll"}}} [:cookie :monster])
(get-in {:cookie {:monster {:vocals "Finntroll"}}} [:monster])

(doc colorize)
(doc doseq)
(doc read-line)

(ns-name *ns*)

;; Quoting any Clojure form tells Clojure not to evaluate it but to treat it as data.

(-> 2 inc)
(-> 1 (- 5 1) (+ 3))
(->> 1 (- 5 1) (+ 3))
(->> 2 inc)

(doc reverse)
(eval (list + 1 2))
(def addition-list (list + 1 2))
(concat addition-list [10])
'(+ 1 2)

(doc read-string)
(read-string "(+ 1 2)")
(read-string "(list + 1 2)")
(doc deref)
{:a 1}
()

(type map)
(type +)
(type (read-string "+"))
(type (read-string "map"))
(type "")
(type 1)
(type nil)
(type ())
(type '())
(= () '())
(identical? () '())
(type '(+ 1 2))
;; On their own, symbols and their referents don’t actually do anything;
;; Clojure performs work by evaluating lists.

(conj '(1 2 3) +)
(eval (conj '(1 2 3) +))

(doc butlast)

;; Function calls always evaluate all of the arguments passed in,
;; so there is no possible way for a function to reach into one of
;; its operands and alter or ignore it. By contrast, when you call a macro,
;; the operands are not evaluated. In particular, symbols are not resolved;
;; they are passed as symbols. Lists are not evaluated either;
;; that is, the first element in the list is not called as a function,
;; special form, or macro. Rather, the unevaluated list data structure is passed in.

;; Another difference is that the data structure returned by a function is not
;; evaluated, but the data structure returned by a macro is.
;; The process of determining the return value of a macro is
;; called macro expansion, and you can use the function macroexpand
;; to see what data structure a macro returns before that data structure
;; is evaluated. Note that you have to quote the form that you pass to macroexpand:

(defmacro ignore-last-operand
  [function-call]
  (butlast function-call))
(macroexpand '(ignore-last-operand (+ 1 2 10)))
(macroexpand '(ignore-last-operand (+ 1 2 (println "look at me!!!"))))

(defmacro infix
  [infixed]
  (list (second infixed)
        (first infixed)
        (last infixed)))

(infix (1 + 2))
(macroexpand '(infix (1 + 2)))

(macroexpand '(when boolean-expression
                expression-1
                expression-2
                expression-3))
(let [num (atom 1)
      s1 @num]
  (swap! num identity)
  (println "State 1:" s1)
  (println "Current state:" @num))

(defn shuffle-speed
  [zombie]
  (* (:cuddle-hunger-level zombie)
     (- 100 (:percent-deteriorated zombie))))

(defn shuffle-alert
  [key watched old-state new-state]
  (let [sph (shuffle-speed new-state)]
    (if (> sph 5000)
      (do
        (println "Watched" watched)
        (println "Cuddle hunger: " (:cuddle-hunger-level old-state))
        (println "Percent deteriorated: " (:percent-deteriorated old-state))
        (println "The zombie's SPH is now " sph)
        (println "This message brought to your courtesy of " key))
      (do
        (println "Watched" watched)
        (println "All's well with " key)
        (println "Cuddle hunger: " (:cuddle-hunger-level new-state))
        (println "Percent deteriorated: " (:percent-deteriorated new-state))
        (println "SPH: " sph)))))

(def fred (atom {:cuddle-hunger-level 0
                 :percent-deteriorated 0}))

(reset! fred {:cuddle-hunger-level 22
              :percent-deteriorated 2})
(add-watch fred :fred-shuffle-alert shuffle-alert)
(swap! fred update-in [:percent-deteriorated] + 1)
(swap! fred update-in [:cuddle-hunger-level] + 30)


(def sock-varieties
  #{"darned" "argyle" "wool" "horsehair" "mulleted"
    "passive-aggressive" "striped" "polka-dotted"
    "athletic" "business" "power" "invisible" "gollumed"})

(defn sock-count
  [sock-variety count]
  {:variety sock-variety
   :count count})

(defn generate-sock-gnome
  "Create an initial sock gnome state with no socks"
  [name]
  {:name name
   :socks #{}})

(def sock-gnome (ref (generate-sock-gnome "Barumpharumph")))
(def dryer (ref {:name "LG 1337"
                 :socks (set (map #(sock-count % 2) sock-varieties))}))

(:socks @dryer)

(defn steal-sock
  [gnome dryer]
  (dosync
   (when-let [pair (some #(if (= (:count %) 2) %) (:socks @dryer))]
     (let [updated-count (sock-count (:variety pair) 1)]
       (alter gnome update-in [:socks] conj updated-count)
       (alter dryer update-in [:socks] disj pair)
       (alter dryer update-in [:socks] conj updated-count)))))
(steal-sock sock-gnome dryer)

(:socks @sock-gnome)

(defn similar-socks
  [target-sock sock-set]
  (filter #(= (:variety %) (:variety target-sock)) sock-set))

(similar-socks (first (:socks @sock-gnome)) (:socks @dryer))

(def counter (ref 0))
(do
(future
  (dosync
   (alter counter inc)
   (println @counter)
   (Thread/sleep 500)
   (alter counter inc)
   (println @counter)))
(Thread/sleep 250)
(println @counter))


(defn fc
  [result [first & rest]]
  (do (if (seq? first) (conj result first) (fc result first))
      (recur result rest)))
