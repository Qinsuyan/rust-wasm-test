# <center>RUST WebAssembly测试项目</center>

## 准备工作

### 安装Rust

* 从[官网](https://www.rust-lang.org/zh-CN/tools/install)下载安装包安装

    安装好之后执行命令
    ```shell
    rustc --version
    ```
    如果能正常显示版本信息则安装成功
    ```shell
    rustc 1.76.0 (07dca489a 2024-02-04)
    ```

### 安装wasm-pack

* wasm是一个用于构建WebAssembly的Rust工具包

* 从[官网](https://rustwasm.github.io/wasm-pack/)下载安装包安装

### 安装cargo-generate

* cargo-generate是一个用于生成项目模板的工具。可以类比为vue-cli

* 使用cargo命令安装（cargo是rust的包管理器，类比npm与nodejs的关系。成功安装rust之后即可使用cargo命令）

    ```shell
    cargo install cargo-generate
    ```

### 安装npm

* 如果你连这个都不会那我也没办法

### 初始化项目

* 执行
    ```shell
    pnpm install
    ```

## 开发指南

* 更改了rust代码后，要重新编译rust代码

* 可以使用`npm run build-rust`命令来编译rust

* 或者使用`npm run build-dev`命令，编译rust代码后，重新安装到node_modules

## 如果有其他不明白的

* 去看官方文档！
