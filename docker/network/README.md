# dockerのnetwork

- 参考
    - [公式ドキュメント](https://docs.docker.jp/engine/userguide/networking/dockernetworks.html)
    - [参考記事](https://qiita.com/toshihirock/items/f5b9f7799ec8bf8c328e)
    
- dockerのインストールをした時に、デフォルトで三つのnetworkが作成される
    - `docker network ls`で確認できる
    - `bridge`,`none`,`host`の三つ
    - これらは削除できない。ユーザー定義の物は追加/削除できる
    ```:shell
    ikkei@IkkeinoMacBook-Pro playground % docker network ls
        NETWORK ID          NAME                DRIVER              SCOPE
        d8f7a295b487        bridge              bridge              local
        c47f47433456        host                host                local
        42f5badbfc66        none                null                local
    ```
    - コンテナを起動するときに`--net`フラグで、コンテナがどのNetworkを使用するかを指定することができる。
- 各々のnetworkはネットワークドライバを持っている
    - デフォルトのネットワーク(ドライバ)は`bridge`
        - オプションで docker run --net=<ネットワーク名> を指定しない限り、Docker デーモンはデフォルトでこのネットワークにコンテナを接続します。
        - bridge はデフォルトでは`docker0`という仮想ブリッジを通じて通信を行う。
        - コンテナ内部と仮想ブリッジ(docker0)は`Virtual Ethernet Tunnel(veth)`によって接続されている
        - コンテナ内では`eth0`を通じてネットワーク通信が出来る
    - `none`のドライバは`null`
        - ネットワーク接続を必要としないコンテナを作成する場合に使用される。
    - `host`ドライバはDocker ホストと同じネットワークにスタックするドライバで、Docker ホストマシンと同じネットワークインタフェース、IP アドレスを持つようになる。