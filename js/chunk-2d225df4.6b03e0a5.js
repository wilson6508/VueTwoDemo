(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d225df4"],{e5f4:function(e,n,t){"use strict";t.r(n);var o=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("div",{staticClass:"row m-4"},[t("div",{staticClass:"col-md-8 col-12"},[t("CodeContainer",{attrs:{title:""},scopedSlots:e._u([{key:"sourceCode",fn:function(){return[t("pre",[e._v('Random random = new Random();\nSupplier<Person> supplier = () -> {\n  Person person = new Person(); // select from db\n  person.setName("Tom" + random.nextInt(10));\n  person.setAge(random.nextInt(99));\n  return person;\n};\nPerson person = queryWithLogicalExpire("person", Person.class, supplier);\n\npublic void setWithLogicalExpire(String key, Object value, Long time, TimeUnit unit) {\n    RedisData redisData = new RedisData();\n    redisData.setData(value);\n    redisData.setExpireTime(LocalDateTime.now().plusSeconds(unit.toSeconds(time)));\n    stringRedisTemplate.opsForValue().set(key, gson.toJson(redisData));\n}\n\npublic <E> E queryWithLogicalExpire(String key, Class<E> type, Supplier<E> supplier) {\n    String json = stringRedisTemplate.opsForValue().get(key);\n    RedisData redisData = gson.fromJson(json, RedisData.class);\n    E data = gson.fromJson(gson.toJson(redisData.getData()), type);\n    if (redisData.getExpireTime().isAfter(LocalDateTime.now())) {\n        // 尚未過期\n        return data;\n    }\n    String lockKey = "lock";\n    boolean isLock = getLock(lockKey);\n    if (isLock) {\n        ExecutorService executorService = Executors.newSingleThreadExecutor();\n        executorService.submit(() -> {\n            try {\n                E e = supplier.get();\n                setWithLogicalExpire(key, e, 2L, TimeUnit.MINUTES);\n            } catch (Exception e) {\n                e.printStackTrace();\n            } finally {\n                removeLock(lockKey);\n            }\n        });\n    }\n    return data;\n}\n\nprivate boolean getLock(String key) {\n    Boolean isLock = stringRedisTemplate.opsForValue().setIfAbsent(key, "1", 10, TimeUnit.SECONDS);\n    return Boolean.TRUE.equals(isLock);\n}\n\nprivate void removeLock(String key) {\n    stringRedisTemplate.delete(key);\n}\n            ')])]},proxy:!0}])}),t("CodeContainer",{attrs:{title:"Person"},scopedSlots:e._u([{key:"sourceCode",fn:function(){return[t("pre",[e._v("public class Person {\n    private String name;\n    private Integer age;\n}\n            ")])]},proxy:!0}])}),t("CodeContainer",{attrs:{title:"RedisData"},scopedSlots:e._u([{key:"sourceCode",fn:function(){return[t("pre",[e._v("public class RedisData {\n    private Object data;\n    private LocalDateTime expireTime;\n}\n            ")])]},proxy:!0}])})],1)])])},r=[],i=t("32f4"),s={name:"LogicalExpire",components:{CodeContainer:i["a"]}},a=s,c=t("2877"),l=Object(c["a"])(a,o,r,!1,null,null,null);n["default"]=l.exports}}]);
//# sourceMappingURL=chunk-2d225df4.6b03e0a5.js.map