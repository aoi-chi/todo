# TODOアプリ

Next.js 14 + TypeScript + Tailwind CSSで構築されたモダンなTODOアプリケーションです。

## デモ

- **Vercel**: https://todo-eight-xi-97.vercel.app/
- **GitHub Pages**: https://aoi-chi.github.io/todo/

## 機能

- **基本的なCRUD操作**
  - タスクの追加・編集・削除
  - 完了状態のトグル
  - インライン編集（タスクをダブルクリック）

- **期限管理**
  - 期限日時の設定
  - 期限までの残り時間表示
  - 期限切れ・期限間近の視覚的表示（色分け）

- **リマインダー機能**
  - 期限24時間前から自動通知
  - 1分間隔でのチェック
  - 通知の閉じる機能

- **フィルタリング**
  - 全て/未完了/完了済みでフィルター

- **データ永続化**
  - ブラウザのlocalStorageを使用
  - ページをリロードしてもデータを保持

## 技術スタック

- **フレームワーク**: Next.js 14 (App Router)
- **言語**: TypeScript
- **スタイリング**: Tailwind CSS
- **データ保存**: localStorage
- **依存関係**: uuid (ID生成用)

## 開発サーバーの起動

```bash
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いてアプリを表示します。

## ビルド

本番用ビルドを作成:

```bash
npm run build
```

ビルドしたアプリを起動:

```bash
npm start
```

## 使い方

1. **タスクの追加**
   - 上部のフォームにタスク名を入力
   - 詳細や期限を設定（オプション）
   - 「追加」ボタンをクリック

2. **タスクの編集**
   - タスクをダブルクリック、または「編集」ボタンをクリック
   - タスク名を変更してEnterキーまたは外側をクリック

3. **タスクの完了**
   - チェックボックスをクリックして完了/未完了を切り替え

4. **タスクの削除**
   - 「削除」ボタンをクリック

5. **フィルタリング**
   - 上部のボタンで「すべて」「未完了」「完了済み」を切り替え

6. **リマインダー**
   - 期限が24時間以内のタスクは自動的に通知されます
   - 画面右上に表示される通知を閉じるには「✕」をクリック

## プロジェクト構造

```
todo/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # ルートレイアウト
│   │   ├── page.tsx            # メインページ
│   │   └── globals.css         # グローバルスタイル
│   ├── components/
│   │   ├── TodoList.tsx        # TODOリスト
│   │   ├── TodoItem.tsx        # 個別アイテム
│   │   ├── TodoForm.tsx        # 追加フォーム
│   │   ├── TodoFilter.tsx      # フィルター
│   │   └── ReminderNotification.tsx  # リマインダー通知
│   ├── hooks/
│   │   ├── useTodos.ts         # TODOロジック
│   │   ├── useLocalStorage.ts  # ストレージ管理
│   │   └── useReminder.ts      # リマインダーロジック
│   ├── types/
│   │   └── todo.ts             # 型定義
│   └── utils/
│       ├── storage.ts          # ストレージユーティリティ
│       └── dateUtils.ts        # 日付処理
├── package.json
├── tsconfig.json
└── README.md
```

## 拡張可能な機能

今後追加できる機能:

- カテゴリ/タグ機能
- 優先度設定
- 検索機能
- ダークモード
- データエクスポート/インポート
- 繰り返しタスク
- サブタスク
- 統計表示
